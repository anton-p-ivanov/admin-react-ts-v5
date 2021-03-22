import { TRoute } from 'config/types';
import { SidebarView } from 'modules/admin/views';

import * as typeViews from '../views/types';

const routes: TRoute[] = [
  {
    id: 'admin.catalogs.types.list',
    path: '/admin/catalogs/types',
    title: 'Типы справочников',
    component: typeViews.ListView,
    sidebar: SidebarView,
  },
];

export default routes;
