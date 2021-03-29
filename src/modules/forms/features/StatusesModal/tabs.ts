import { TTabs } from 'components/Tabs/types';

import * as Views from './components';

const Tabs: TTabs = [
  {
    id: 'form-status-status',
    label: 'Статус веб-формы',
    items: [
      {
        id: 'form-status-basic',
        label: 'Основные параметры',
        component: Views.BasicTab,
      },
      {
        id: 'form-status-extra',
        label: 'Дополнительно',
        component: Views.ExtraTab,
      },
    ],
  },
];

export default Tabs;
