import { TTabs } from 'components/Tabs/types';

import * as Views from './components';

const tabs: TTabs = [
  {
    id: 'question-properties',
    label: 'Параметры вопроса',
    component: Views.PropertiesTab,
  },
  {
    id: 'question-description',
    label: 'Краткое описание',
    component: Views.DescriptionTab,
  },
  {
    id: 'question-answers',
    label: 'Варианты ответов',
    component: Views.AnswersTab,
  },
];

export { tabs };
