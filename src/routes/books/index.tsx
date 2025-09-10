import { SearchBar } from '../../components/SearchBar';
import { booksQueryOptions } from '../../data/queries/books/useBooks';
import { queryClient } from '../../main';
import type { IBook } from '../../types/api/responses/IBook';
import { Button, Group, Stack, Table, type TableData } from '@mantine/core';
import { useDebouncedState } from '@mantine/hooks';
import { modals } from '@mantine/modals';
import { IconPlus } from '@tabler/icons-react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/books/')({
  component: BookPage,
  loader: () => queryClient.ensureQueryData(booksQueryOptions)
});

function BookPage() {
  const { data: books } = useSuspenseQuery(booksQueryOptions);
  const [search, setSearch] = useDebouncedState<string | null>(null, 200);

  return (
    <Stack>
      <Group align='flex-end'>
        <SearchBar label='Search books' setSearch={setSearch} />
        <CreateBookButton />
      </Group>
      <BookTable books={books.filter((b) => search === null || b.title.includes(search))} />
    </Stack>
  );
}

const CreateBookButton = () => {
  return (
    <Button
      color='brandYellow'
      ml='auto'
      onClick={() =>
        modals.openContextModal({
          modal: 'createBookModal',
          title: 'Create book',
          size: 'lg',
          innerProps: {}
        })
      }
      leftSection={<IconPlus />}
      rightSection='Create'
    />
  );
};

const BookTable = ({ books }: { books: IBook[] }) => {
  const data: TableData = {
    caption: 'All books',
    head: ['ID', 'Title', 'Tome'],
    body: books.map((a) => [a.id, a.title, a.tome])
  };
  return <Table data={data} striped stickyHeader />;
};
