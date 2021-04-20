import { TFormField, TFormFields } from 'components/Form/types';
import { validators } from 'modules/fields/config/constants';

const options: TFormField<string> = {
  name: 'options',
  type: 'textarea',
  label: 'Параметры',
  hint: 'Параметры валидатора в JSON-формате, например: {"min":1,"max":100}',
  attrs: {
    input: {
      size: 'small',
    },
  },
};

const type: TFormField<number> = {
  name: 'type',
  type: 'select',
  label: 'Тип проверки',
  isRequired: true,
  attrs: {
    input: {
      placeholder: '- Выберите тип проверки -',
      options: validators,
    },
  },
};

const sort: TFormField<number> = {
  name: 'sort',
  type: 'number',
  label: 'Сортировка',
  attrs: {
    input: {
      min: 0,
      step: 10,
    },
    wrapper: {
      variant: 'sort',
    },
  },
};

const fields: TFormFields = {
  options,
  type,
  sort,
};

export default fields;
