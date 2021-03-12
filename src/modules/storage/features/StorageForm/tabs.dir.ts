import { TTabs } from 'components/Tabs/types';

import { Views } from './components';

const Tabs: TTabs = [
  {
    id: 'general',
    label: 'Параметры папки',
    items: [
      {
        id: 'properties',
        label: 'Основные параметры',
        component: Views.PropertiesTab,
      },
    ],
  },
];

export default Tabs;
