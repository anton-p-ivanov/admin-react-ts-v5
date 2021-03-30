import { TRoute } from 'config/types';
import { SidebarView } from 'modules/admin/views';

import * as coursesViews from '../views/courses';
import * as testsViews from '../views/tests';

const routes: TRoute[] = [
  {
    id: 'training.courses.list',
    path: '/training/courses',
    title: 'Учебные курсы',
    component: coursesViews.ListView,
  },
  {
    id: 'training.courses.create',
    path: '/training/courses/create',
    title: 'Создание нового учебного курса',
    component: coursesViews.CreateView,
  },
  {
    id: 'training.courses.edit',
    path: `/training/courses/:uuid/edit`,
    title: 'Изменение учебного курса',
    component: coursesViews.EditView,
  },
  {
    id: 'training.courses.copy',
    path: `/training/courses/:uuid/copy`,
    title: 'Копирование учебного курса',
    component: coursesViews.CopyView,
  },
  {
    id: 'training.tests.list',
    path: '/training/tests',
    title: 'Тестирование',
    component: testsViews.ListView,
  },
  {
    id: 'training.tests.create',
    path: '/training/tests/create',
    title: 'Создание нового теста',
    component: testsViews.CreateView,
  },
  {
    id: 'training.tests.edit',
    path: `/training/tests/:uuid/edit`,
    title: 'Изменение теста',
    component: testsViews.EditView,
  },
  {
    id: 'training.tests.copy',
    path: `/training/tests/:uuid/copy`,
    title: 'Копирование теста',
    component: testsViews.CopyView,
  },
];

export default routes.map((route) => ({ ...route, sidebar: SidebarView }));
