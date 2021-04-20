import { TTabs } from 'components/Tabs/types';

import * as Views from './components';

const Tabs: TTabs = [
  {
    id: 'attributes',
    label: 'Параметры элемента',
    component: Views.AttributesTab,
  },
  {
    id: 'properties',
    label: 'Свойства элемента',
    component: Views.PropertiesTab,
  },
  {
    id: 'extra',
    label: 'Дополнительно',
    component: Views.ExtraTab,
  },
  {
    id: 'access',
    label: 'Настройка доступа',
    component: Views.AccessTab,
  },
];

export default Tabs;
