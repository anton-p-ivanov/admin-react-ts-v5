import { TChoicesProps } from '../Choices/types';

export type TRolesProps = TChoicesProps & {
  displayType?: 'choices' | 'select';
};
