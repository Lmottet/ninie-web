import { useCreateBook } from '../../data/queries/books/useCreateBook';
import type { CreateBookRequest } from '../../types/api/requests/CreateBookRequest';
import { Button, Fieldset, NumberInput, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import type { ContextModalProps } from '@mantine/modals';

export const CreateBookModal = ({ context, id }: ContextModalProps) => {
  const createBookForm = useForm<CreateBookRequest>();
  const { mutate: createBook } = useCreateBook(() => context.closeModal(id));
  return (
    <Fieldset legend='new author'>
      <form onSubmit={createBookForm.onSubmit((formData) => createBook(formData))}>
        <Stack>
          <TextInput label='title' {...createBookForm.getInputProps('title')} />
          <NumberInput label='tome' {...createBookForm.getInputProps('tome')} />
          <Button type='submit' color='brandYellow' ml='auto'>
            Create
          </Button>
        </Stack>
      </form>
    </Fieldset>
  );
};
