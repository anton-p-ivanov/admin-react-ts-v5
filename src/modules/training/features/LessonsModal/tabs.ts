import { TTabs } from 'components/Tabs/types';

import * as Views from './components';

const Tabs: TTabs = [
  {
    id: 'lesson-properties',
    label: 'Параметры урока',
    component: Views.PropertiesTab,
  },
  {
    id: 'lesson-questions',
    label: 'Список вопросов',
    component: Views.QuestionsTab,
  },
];

export default Tabs;
