import { TFormField } from '../FormField/types';

export type TFormInputProps = {
  field: TFormField<string> | TFormField<string[]> | TFormField<boolean>;
};
