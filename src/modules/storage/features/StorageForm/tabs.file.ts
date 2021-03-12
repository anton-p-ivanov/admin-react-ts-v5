import { TTabs } from 'components/Tabs/types';

import { Views } from './components';

const Tabs: TTabs = [
  {
    id: 'general',
    label: 'Параметры файла',
    items: [
      {
        id: 'properties',
        label: 'Основные параметры',
        component: Views.PropertiesTab,
      },
      {
        id: 'description',
        label: 'Дополнительно',
        component: Views.DescriptionTab,
      },
      {
        id: 'versions',
        label: 'Версии файла',
        component: Views.VersionsTab,
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
      {
        id: 'requests',
        label: 'Запросы на доступ',
        component: Views.RequestsTab,
      },
    ],
  },
];

export default Tabs;
