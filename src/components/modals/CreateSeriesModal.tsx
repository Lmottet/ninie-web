import { useCreateSeries } from '../../data/queries/series/useCreateSeries';
import type { CreateSeriesRequest } from '../../types/api/requests/CreateSeriesRequest';
import { Button, Checkbox, Fieldset, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import type { ContextModalProps } from '@mantine/modals';

export const CreateSeriesModal = ({ context, id }: ContextModalProps) => {
  const createSeriesForm = useForm<CreateSeriesRequest>();
  const { mutate: createSeries } = useCreateSeries(() => context.closeModal(id));
  return (
    <Fieldset legend='new series'>
      <form onSubmit={createSeriesForm.onSubmit((formData) => createSeries(formData))}>
        <Stack>
          <TextInput label='title' {...createSeriesForm.getInputProps('title')} />
          <Checkbox label='is finished' {...createSeriesForm.getInputProps('isFinished', { type: 'checkbox' })} />
          <Button type='submit' color='brandYellow' ml='auto'>
            Create
          </Button>
        </Stack>
      </form>
    </Fieldset>
  );
};
