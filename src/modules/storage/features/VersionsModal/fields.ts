import { TFormField, TFormFields } from 'components/Form/types';

const name: TFormField<string> = {
  name: 'name',
  label: 'Имя файла',
  isRequired: true,
};

const fields: TFormFields = {
  name,
};

export default fields;
