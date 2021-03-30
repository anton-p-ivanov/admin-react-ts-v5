import { TRoute } from 'config/types';
import { SidebarView } from 'modules/admin/views';

import * as Views from '../views';

const routes: TRoute[] = [
  {
    id: 'forms.list',
    path: '/forms',
    title: 'Веб-формы',
    component: Views.ListView,
  },
  {
    id: 'forms.create',
    path: '/forms/create',
    title: 'Создание новой веб-формы',
    component: Views.CreateView,
  },
  {
    id: 'forms.edit',
    path: `/forms/:uuid/edit`,
    title: 'Изменение веб-формы',
    component: Views.EditView,
  },
  {
    id: 'forms.copy',
    path: `/forms/:uuid/copy`,
    title: 'Копирование веб-формы',
    component: Views.CopyView,
  },
];

export default routes.map((route) => ({ ...route, sidebar: SidebarView }));
