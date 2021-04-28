import { TFormField, TFormFields } from 'components/Form/types';

const username: TFormField<string> = {
  name: 'username',
  label: 'E-Mail',
  isRequired: true,
  attrs: {
    input: {
      placeholder: 'Введите ваш E-Mail',
    },
  },
};

const password: TFormField<string> = {
  name: 'password',
  label: 'Пароль',
  isRequired: true,
  type: 'password',
  attrs: {
    input: {
      placeholder: 'Введите пароль',
    },
  },
};

const fields: TFormFields = {
  username,
  password,
};

export default fields;
