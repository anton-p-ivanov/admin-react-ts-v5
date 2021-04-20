import { TRoute } from 'config/types';
import { SidebarView } from 'modules/admin/views';

import * as catalogViews from '../views/catalogs';
import * as elementsViews from '../views/elements';
import * as typeViews from '../views/types';

const routes: TRoute[] = [
  {
    id: 'admin.catalogs.list',
    path: '/admin/catalogs',
    title: 'Справочники',
    component: catalogViews.ListView,
  },
  {
    id: 'admin.catalogs.create',
    path: '/admin/catalogs/create',
    title: 'Создание нового справочника',
    component: catalogViews.CreateView,
  },
  {
    id: 'admin.catalogs.edit',
    path: `/admin/catalogs/:uuid/edit`,
    title: 'Изменение справочника',
    component: catalogViews.EditView,
  },
  {
    id: 'admin.catalogs.copy',
    path: `/admin/catalogs/:uuid/copy`,
    title: 'Копирование справочника',
    component: catalogViews.CopyView,
  },
  {
    id: 'admin.catalogs.types.list',
    path: '/admin/catalogs/types',
    title: 'Типы справочников',
    component: typeViews.ListView,
  },
  {
    id: 'catalogs',
    path: '/catalogs/overview',
    title: 'Справочники',
    component: elementsViews.IndexView,
    sidebar: elementsViews.SidebarView,
  },
  {
    id: 'catalogs.list',
    path: '/catalogs/:uuid/list',
    title: 'Справочники',
    component: elementsViews.IndexView,
    sidebar: elementsViews.SidebarView,
  },
  {
    id: 'catalogs.elements',
    path: '/catalogs/elements/:uuid/list',
    title: 'Элементы',
    component: elementsViews.ListView,
    sidebar: elementsViews.SidebarView,
  },
  {
    id: 'catalogs.elements.create',
    path: '/catalogs/elements/:uuid/create',
    title: 'Создание элемента',
    component: elementsViews.CreateView,
    sidebar: elementsViews.SidebarView,
  },
  {
    id: 'catalogs.elements.edit',
    path: '/catalogs/elements/:uuid/edit',
    title: 'Изменение элемента',
    component: elementsViews.EditView,
    sidebar: elementsViews.SidebarView,
  },
  {
    id: 'catalogs.elements.copy',
    path: '/catalogs/elements/:uuid/copy',
    title: 'Изменение элемента',
    component: elementsViews.CopyView,
    sidebar: elementsViews.SidebarView,
  },
];

export default routes.map((route) => ({ ...route, sidebar: route.sidebar || SidebarView }));
