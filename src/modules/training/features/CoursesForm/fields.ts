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
  isRequired: true,
  hint: 'Не более 250 символов.',
};

const description: TFormField<string> = {
  name: 'description',
  type: 'textarea',
  label: 'Краткое описание',
  hint: 'Краткое описание может быть представлено в виде неформатированного текста или HTML-кода.',
};

const code: TFormField<string> = {
  name: 'code',
  label: 'Символьный код',
  isRequired: true,
  hint: 'Уникальный символьный код может содержать до 250 символов латинского алфавита, подчеркивания и цифр.',
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

const sites: TFormField<string[]> = {
  name: 'sites',
  label: 'Сайты',
  type: 'sites',
};

const roles: TFormField<string[]> = {
  name: 'roles',
  label: 'Роли пользователя',
  type: 'roles',
};

const workflow: TFormField<string> = {
  name: 'workflow',
  label: 'Статус документооборота',
  type: 'workflow',
  isRequired: true,
};

const fields: TFormFields = {
  isActive,
  title,
  description,
  code,
  sort,
  sites,
  roles,
  workflow,
};

export { fields };
