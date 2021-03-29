import { TFormField, TFormFields } from 'components/Form/types';

const isActive: TFormField<boolean> = {
  name: 'isActive',
  label: 'Активность',
  type: 'boolean',
  // emptyValue: true,
  attrs: {
    input: {
      variant: 'inline',
    },
  },
};

const isDefault: TFormField<boolean> = {
  name: 'isDefault',
  label: 'По-умолчанию',
  type: 'boolean',
  hint: 'Определяет, будет ли этот статус присвоен автоматически всем новым результатам регистрационной формы.',
  // emptyValue: false,
  attrs: {
    input: {
      variant: 'inline',
    },
  },
};

const title: TFormField<string> = {
  name: 'title',
  label: 'Название',
  hint: 'Не более 255 символов.',
  isRequired: true,
};

const description: TFormField<string> = {
  name: 'description',
  type: 'textarea',
  label: 'Краткое описание',
  hint: 'Опишите кратко назначение статуса.',
  attrs: {
    input: {
      size: 'small',
    },
  },
};

const sort: TFormField<number> = {
  name: 'sort',
  type: 'number',
  label: 'Сортировка',
  isRequired: true,
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
  isDefault,
  sort,
};

export { fields };
