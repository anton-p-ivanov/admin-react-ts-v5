import { TFormField, TFormFields } from 'components/Form/types';

const account: TFormField<string> = {
  name: 'account',
  label: 'Компания',
  type: 'select',
  attrs: {
    input: {
      placeholder: '- Выберите значение -',
    },
  },
};

const position: TFormField<string> = {
  name: 'position',
  label: 'Должность',
  attrs: {
    input: {
      placeholder: 'Например, менеджер по продажам',
    },
  },
};

const fields: TFormFields = {
  account,
  position,
};

export default fields;
