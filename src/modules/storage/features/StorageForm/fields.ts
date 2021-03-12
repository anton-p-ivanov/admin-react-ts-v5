import { TFormField, TFormFields } from 'components/Form/types';

const title: TFormField<string> = {
  name: 'title',
  label: 'Название',
  isRequired: true,
  hint: 'Не более 250 символов.',
};

const author: TFormField<string> = {
  name: 'author',
  label: 'Автор',
  hint: 'Не более 250 символов.',
  attrs: {
    input: {
      placeholder: 'Иван Иванов',
    },
  },
};

const description: TFormField<string> = {
  name: 'description',
  type: 'textarea',
  label: 'Краткое описание',
  hint: 'Краткое описание может быть представлено в виде неформатированного текста или HTML-кода.',
};

const content: TFormField<string> = {
  name: 'content',
  type: 'textarea',
  label: 'Подробное описание',
  hint: 'Подробное описание может быть представлено в виде неформатированного текста или HTML-кода.',
  attrs: {
    input: {
      size: 'large',
    },
  },
};

const parentNode: TFormField<string> = {
  name: 'parentNode',
  label: 'Расположение',
  type: 'select',
};

const categories: TFormField<string> = {
  name: 'categories',
  label: 'Категории',
  type: 'select',
};

const roles: TFormField<string[]> = {
  name: 'roles',
  label: 'Группы пользователей, которым разрешен доступ к файлу или папке',
  type: 'roles',
};

const workflow: TFormField<string> = {
  name: 'workflow',
  label: 'Статус документооборота',
  type: 'workflow',
  isRequired: true,
};

const fields: TFormFields = { title, description, content, parentNode, roles, author, categories, workflow };

export default fields;
