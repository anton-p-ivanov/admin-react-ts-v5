import { TTabs } from 'components/Tabs/types';

import { Views } from './components';

const Tabs: TTabs = [
  {
    id: 'general-attributes',
    label: 'Основные параметры',
    items: [
      {
        id: 'user',
        label: 'Пользователь',
        component: Views.UserTab,
      },
      {
        id: 'account',
        label: 'Компания',
        component: Views.AccountTab,
      },
    ],
  },
  {
    id: 'access',
    label: 'Управление доступом',
    items: [
      {
        id: 'roles',
        label: 'Роли',
        component: Views.RolesTab,
      },
      {
        id: 'sites',
        label: 'Сайты',
        component: Views.SitesTab,
      },
      {
        id: 'passwords',
        label: 'Пароли',
        component: Views.PasswordsTab,
      },
    ],
  },
];

export default Tabs;
