import { TFormField, TFormFields } from 'components/Form/types';

const label: TFormField<string> = {
  name: 'label',
  label: 'Подпись',
};

const value: TFormField<string> = {
  name: 'value',
  label: 'Значение',
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
  value,
  label,
  sort,
};

export default fields;
