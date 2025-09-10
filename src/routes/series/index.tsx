import { seriesQueryOptions } from '../../data/queries/series/useSeries';
import { queryClient } from '../../main';
import type { ISeries } from '../../types/api/responses/ISeries';
import { Button, Stack, Table, type TableData } from '@mantine/core';
import { modals } from '@mantine/modals';
import { IconPlus } from '@tabler/icons-react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/series/')({
  component: RouteComponent,
  loader: () => queryClient.ensureQueryData(seriesQueryOptions)
});

function RouteComponent() {
  const { data: series } = useSuspenseQuery(seriesQueryOptions);

  return (
    <Stack>
      <CreateSeriesButton />
      <SeriesTable series={series} />
    </Stack>
  );
}

const CreateSeriesButton = () => {
  return (
    <Button
      color='brandYellow'
      ml='auto'
      onClick={() =>
        modals.openContextModal({
          modal: 'createSeriesModal',
          title: 'Create series',
          size: 'lg',
          innerProps: {}
        })
      }
      leftSection={<IconPlus />}
      rightSection='Create'
    />
  );
};

const SeriesTable = ({ series }: { series: ISeries[] }) => {
  const data: TableData = {
    caption: 'All series',
    head: ['ID', 'Title', 'IsFinished'],
    body: series.map((a) => [a.id, a.title, a.isFinished])
  };
  return <Table data={data} />;
};
