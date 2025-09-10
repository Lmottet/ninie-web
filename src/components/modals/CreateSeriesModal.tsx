import { useCreateSeries } from '../../data/queries/series/useCreateSeries';
import type { CreateSeriesRequest } from '../../types/api/requests/CreateSeriesRequest';
import { Button, Fieldset, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import type { ContextModalProps } from '@mantine/modals';

export const CreateSeriesModal = ({ context, id }: ContextModalProps) => {
  const createSeriesForm = useForm<CreateSeriesRequest>();
  const { mutate: createSeries } = useCreateSeries(() => context.closeModal(id));
  return (
    <Fieldset legend='new author'>
      <form onSubmit={createSeriesForm.onSubmit((formData) => createSeries(formData))}>
        <Stack>
          <TextInput label='first name' {...createSeriesForm.getInputProps('title')} />
          <TextInput label='last name' {...createSeriesForm.getInputProps('isFinished')} />
          <Button type='submit' color='brandYellow' ml='auto'>
            Create
          </Button>
        </Stack>
      </form>
    </Fieldset>
  );
};
