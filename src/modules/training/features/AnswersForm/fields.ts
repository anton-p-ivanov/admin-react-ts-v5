import { TFormField, TFormFields } from 'components/Form/types';

const answer: TFormField<string> = {
  name: 'answer',
  label: 'Ответ',
  attrs: {
    input: {
      placeholder: 'Введите ответ на вопрос',
    },
  },
};

const isValid: TFormField<boolean> = {
  name: 'isValid',
  label: 'Прав.',
  type: 'checkbox',
  value: true,
};

const fields: TFormFields = {
  answer,
  isValid,
};

export { fields };
