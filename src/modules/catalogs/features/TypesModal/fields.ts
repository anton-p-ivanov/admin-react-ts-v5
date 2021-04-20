import { TFormField, TFormFields } from 'components/Form/types';

const title: TFormField<string> = {
  name: 'title',
  label: 'Название',
  isRequired: true,
};

const sort: TFormField<number> = {
  name: 'sort',
  label: 'Индекс сортировки',
  type: 'number',
  emptyValue: 100,
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
  title,
  sort,
};

export default fields;
