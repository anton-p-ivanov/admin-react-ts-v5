import { TFormField, TFormFieldType, TFormFieldValue } from 'components/Form/components/FormField/types';
import { TField } from 'modules/fields/config/types';

export type TInputProperty<T extends TFormFieldValue> = TFormField<T>;
export type TInputPropertyProps = {
  field: TField;
};

export const FIELD_TYPES: Record<string, TFormFieldType> = {
  S: 'text',
  T: 'textarea',
  C: 'choices',
  D: 'select',
  F: 'text',
};
