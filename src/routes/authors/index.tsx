import { authorsQueryOptions } from '../../data/queries/useAuthors';
import { queryClient } from '../../main';
import { IAuthor } from '../../types/IAuthor';
import { Button, Stack, Table, TableData } from '@mantine/core';
import { modals } from '@mantine/modals';
import { IconPlus } from '@tabler/icons-react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/authors/')({
  component: RouteComponent,
  loader: () => queryClient.ensureQueryData(authorsQueryOptions)
});

function RouteComponent() {
  const { data: authors } = useSuspenseQuery(authorsQueryOptions);

  return (
    <Stack>
      <CreateAuthorButton />
      <AuthorTable authors={authors} />
    </Stack>
  );
}

const CreateAuthorButton = () => {
  return (
    <Button
      color='brandYellow'
      ml='auto'
      onClick={() =>
        modals.openContextModal({
          modal: 'createAuthorModal',
          title: 'Create author',
          size: 'lg',
          innerProps: {}
        })
      }
      leftSection={<IconPlus />}
      rightSection='Create'
    />
  );
};

const AuthorTable = ({ authors }: { authors: IAuthor[] }) => {
  const data: TableData = {
    caption: 'All authors',
    head: ['ID', 'First name', 'Last name'],
    body: authors.map((a) => [a.id, a.firstName, a.lastName])
  };
  return <Table data={data} />;
};
