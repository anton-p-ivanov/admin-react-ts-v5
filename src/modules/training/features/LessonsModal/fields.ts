import { TFormField, TFormFields } from 'components/Form/types';

const isActive: TFormField<boolean> = {
  name: 'isActive',
  label: 'Активность',
  type: 'boolean',
  emptyValue: true,
  attrs: {
    input: {
      variant: 'inline',
    },
  },
};

const title: TFormField<string> = {
  name: 'title',
  label: 'Название',
  hint: 'Не более 250 символов.',
  isRequired: true,
};

const description: TFormField<string> = {
  name: 'description',
  type: 'textarea',
  label: 'Краткое описание',
  hint: 'Опишите кратко содержание урока.',
};

const sort: TFormField<number> = {
  name: 'sort',
  type: 'number',
  label: 'Сортировка',
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
  description,
  isActive,
  sort,
};

export { fields };
