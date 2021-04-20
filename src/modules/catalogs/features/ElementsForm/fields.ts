/* eslint-disable @typescript-eslint/no-explicit-any */
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
  hint: 'Максимальная длина не более 250 знаков.',
  isRequired: true,
};

const description: TFormField<string> = {
  name: 'description',
  type: 'textarea',
  label: 'Краткое описание',
  hint: 'Допускается использовать HTML-разметку. Макс. объём информации не более 1Кб.',
  attrs: {
    input: {
      size: 'small',
    },
  },
};

const content: TFormField<string> = {
  name: 'content',
  type: 'textarea',
  label: 'Детальное описание',
  hint: 'Допускается использовать HTML-разметку. Макс. объём информации не более 1Мб.',
  attrs: {
    input: {
      size: 'large',
    },
  },
};

const code: TFormField<string> = {
  name: 'code',
  label: 'Символьный код',
  hint: 'Допускается вводить цифры, символы латинского алфавита, тире, подчеркивания общей длиной не более 250 знаков.',
  isRequired: true,
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

const activeFrom: TFormField<string> = {
  name: 'activeFrom',
  type: 'dateTime',
  label: 'Активна с',
  hint: 'Дата начала активности',
};

const activeTo: TFormField<string> = {
  name: 'activeTo',
  type: 'dateTime',
  label: 'Активна до',
  hint: 'Дата конца активности',
};

const parentNode: TFormField<string> = {
  name: 'parentNode',
  label: 'Расположение',
  type: 'select',
};

const parentNodes: TFormField<string[]> = {
  name: 'parentNodes',
  label: 'Разделы',
  type: 'select',
};

const roles: TFormField<string[]> = {
  name: 'roles',
  label: 'Группы пользователей',
  hint: 'Группы пользователей, которым разрешён доступ к элементу',
  type: 'roles',
};

const sites: TFormField<string[]> = {
  name: 'sites',
  label: 'Сайты',
  hint: 'Список сайтов, на которых элемент справочника будет виден.',
  type: 'sites',
};

const workflow: TFormField<string> = {
  name: 'workflow',
  label: 'Статус документооборота',
  type: 'workflow',
  isRequired: true,
  attrs: {
    wrapper: {
      variant: 'workflow',
    },
  },
};

const fields: TFormFields = {
  isActive,
  activeFrom,
  activeTo,
  title,
  description,
  content,
  code,
  sort,
  parentNode,
  parentNodes,
  roles,
  sites,
  workflow,
};

export default fields;
