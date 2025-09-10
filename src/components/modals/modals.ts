import { CreateAuthorModal } from './CreateAuthorModal';

const ModalsConfiguration = {
  createAuthorModal: CreateAuthorModal
};

declare module '@mantine/modals' {
  export interface MantineModalsOverride {
    modals: typeof ModalsConfiguration;
  }
}

export default ModalsConfiguration;
