import { TRoute } from 'config/types';

import * as Views from '../views';

const routes: TRoute[] = [
  {
    id: 'accounts',
    path: '/accounts',
    title: 'Контрагенты',
    component: Views.ListView,
  },
  {
    id: 'accounts.create',
    path: '/accounts/create',
    title: 'Создание нового контрагента',
    component: Views.CreateView,
  },
  {
    id: 'accounts.edit',
    path: `/accounts/:uuid/edit`,
    title: 'Изменение контрагента',
    component: Views.EditView,
  },
  {
    id: 'accounts.copy',
    path: `/accounts/:uuid/copy`,
    title: 'Копирование контрагента',
    component: Views.CopyView,
  },
];

export default routes;
