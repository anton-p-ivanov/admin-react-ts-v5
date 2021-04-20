import { TTabs } from 'components/Tabs/types';

import * as Views from './components';

const Tabs: TTabs = [
  {
    id: 'general-attributes',
    label: 'Основные параметры',
    items: [
      {
        id: 'form',
        label: 'Веб-форма',
        component: Views.PropertiesTab,
      },
      {
        id: 'template',
        label: 'Шаблон формы',
        component: Views.TemplateTab,
      },
    ],
  },
  {
    id: 'settings',
    label: 'Конструктор формы',
    items: [
      {
        id: 'fields',
        label: 'Поля формы',
        component: Views.FieldsTab,
      },
      {
        id: 'statuses',
        label: 'Статусы формы',
        component: Views.StatusesTab,
      },
    ],
  },
  {
    id: 'form-status-template',
    label: 'Почтовый шаблон',
    items: [
      {
        id: 'form-template-1',
        label: 'Основные настройки',
        component: Views.MailTab,
      },
    ],
  },
  {
    id: 'access',
    label: 'Управление доступом',
    items: [
      {
        id: 'roles',
        label: 'Управление ролями',
        component: Views.RolesTab,
      },
    ],
  },
];

export default Tabs;
