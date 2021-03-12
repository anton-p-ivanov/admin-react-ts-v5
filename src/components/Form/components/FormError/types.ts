import { TFormField } from '../FormField/types';

export type TFormErrorProps = {
  field: TFormField<string> | TFormField<string[]> | TFormField<boolean>;
};
