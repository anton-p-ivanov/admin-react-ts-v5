import { TChoicesProps } from '../Choices/types';

export type TBooleanProps = TChoicesProps & {
  value?: boolean;
  onChange?: (value: boolean) => void;
};
