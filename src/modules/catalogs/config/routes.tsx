import { TRoute } from 'config/types';
import { SidebarView } from 'modules/admin/views';

import * as catalogViews from '../views/catalogs';
import * as typeViews from '../views/types';

const routes: TRoute[] = [
  {
    id: 'admin.catalogs.list',
    path: '/admin/catalogs',
    title: 'Справочники',
    component: catalogViews.ListView,
    sidebar: SidebarView,
  },
  {
    id: 'admin.catalogs.create',
    path: '/admin/catalogs/create',
    title: 'Создание нового справочника',
    component: catalogViews.CreateView,
    sidebar: SidebarView,
  },
  {
    id: 'admin.catalogs.edit',
    path: `/admin/catalogs/:uuid/edit`,
    title: 'Изменение справочника',
    component: catalogViews.EditView,
    sidebar: SidebarView,
  },
  {
    id: 'admin.catalogs.copy',
    path: `/admin/catalogs/:uuid/copy`,
    title: 'Копирование справочника',
    component: catalogViews.CopyView,
    sidebar: SidebarView,
  },
  {
    id: 'admin.catalogs.types.list',
    path: '/admin/catalogs/types',
    title: 'Типы справочников',
    component: typeViews.ListView,
    sidebar: SidebarView,
  },
];

export default routes;
