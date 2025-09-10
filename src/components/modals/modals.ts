import { CreateAuthorModal } from './CreateAuthorModal';
import { CreateBookModal } from './CreateBookModal';
import { CreateSeriesModal } from './CreateSeriesModal';

const ModalsConfiguration = {
  createAuthorModal: CreateAuthorModal,
  createBookModal: CreateBookModal,
  createSeriesModal: CreateSeriesModal
};

declare module '@mantine/modals' {
  export interface MantineModalsOverride {
    modals: typeof ModalsConfiguration;
  }
}

export default ModalsConfiguration;
