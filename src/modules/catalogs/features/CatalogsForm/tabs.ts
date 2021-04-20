import { TTabs } from 'components/Tabs/types';

import * as Views from './components';

const Tabs: TTabs = [
  {
    id: 'catalog',
    label: 'Основные параметры',
    component: Views.CatalogTab,
  },
  {
    id: 'fields',
    label: 'Конструктор полей',
    component: Views.FieldsTab,
  },
  {
    id: 'access',
    label: 'Управление доступом',
    component: Views.AccessTab,
  },
];

export default Tabs;
