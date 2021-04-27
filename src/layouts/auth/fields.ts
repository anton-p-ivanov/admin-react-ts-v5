import { TFormField, TFormFields } from 'components/Form/types';

const username: TFormField<string> = {
  name: 'username',
  label: 'E-Mail',
  isRequired: true,
};

const password: TFormField<string> = {
  name: 'password',
  label: 'Пароль',
  isRequired: true,
};

const fields: TFormFields = {
  username,
  password,
};

export default fields;
