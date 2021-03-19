import { TTabs } from 'components/Tabs/types';

import * as Views from './components';

const Tabs: TTabs = [
  {
    id: 'general-attributes',
    label: 'Основные параметры',
    items: [
      {
        id: 'company',
        label: 'Компания',
        component: Views.AccountTab,
      },
      {
        id: 'description',
        label: 'Описание',
        component: Views.DescriptionTab,
      },
      {
        id: 'addresses',
        label: 'Адреса',
        component: Views.AddressesTab,
      },
    ],
  },
  {
    id: 'partnership',
    label: 'Партнёрство',
    items: [
      {
        id: 'statuses',
        label: 'Статусы',
        component: Views.StatusesTab,
      },
      {
        id: 'managers',
        label: 'Менеджеры',
        component: Views.ManagersTab,
      },
      {
        id: 'contacts',
        label: 'Контакты',
        component: Views.ContactsTab,
      },
    ],
  },
];

export default Tabs;
