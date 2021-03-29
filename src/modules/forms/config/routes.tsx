import { TRoute } from 'config/types';
import { SidebarView } from 'modules/admin/views';

import * as Views from '../views';

const routes: TRoute[] = [
  {
    id: 'forms.list',
    path: '/forms',
    title: 'Веб-формы',
    component: Views.ListView,
    sidebar: SidebarView,
  },
  {
    id: 'forms.create',
    path: '/forms/create',
    title: 'Создание новой веб-формы',
    component: Views.CreateView,
    sidebar: SidebarView,
  },
  {
    id: 'forms.edit',
    path: `/forms/:uuid/edit`,
    title: 'Изменение веб-формы',
    component: Views.EditView,
    sidebar: SidebarView,
  },
  {
    id: 'forms.copy',
    path: `/forms/:uuid/copy`,
    title: 'Копирование веб-формы',
    component: Views.CopyView,
    sidebar: SidebarView,
  },
];

export default routes;
