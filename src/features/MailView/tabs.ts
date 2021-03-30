import { TTabs } from 'components/Tabs/types';

import * as Views from './components';

const Tabs: TTabs = [
  {
    id: 'mail-template-html',
    label: 'Форматированный HTML',
    component: Views.HTMLTab,
  },
  {
    id: 'mail-template-text',
    label: 'Обычный текст',
    component: Views.TextTab,
  },
];

export default Tabs;
