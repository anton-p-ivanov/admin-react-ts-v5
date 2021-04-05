import { TTabs } from 'components/Tabs/types';

import * as Views from './components';

const tabs: TTabs = [
  {
    id: 'general',
    label: 'Основные параметры',
    items: [
      {
        id: 'course',
        label: 'Основные параметры',
        component: Views.CourseTab,
      },
    ],
  },
  {
    id: 'builder',
    label: 'Конструктор курса',
    items: [
      {
        id: 'lessons',
        label: 'Список уроков',
        component: Views.LessonsTab,
      },
    ],
  },
  {
    id: 'access',
    label: 'Управление доступом',
    items: [
      {
        id: 'access-1',
        label: 'Сайты и роли',
        component: Views.AccessTab,
      },
      {
        id: 'access-2',
        label: 'Контрагенты',
        component: Views.AccountsTab,
      },
    ],
  },
];

export { tabs };
