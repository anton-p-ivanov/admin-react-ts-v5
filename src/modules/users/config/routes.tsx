import { TRoute } from 'config/types';
import * as Views from 'modules/users/views';

const routes: TRoute[] = [
  {
    id: 'users',
    path: '/users',
    title: 'Пользователи',
    component: Views.ListView,
  },
  {
    id: 'users.create',
    path: '/users/create',
    title: 'Создание нового пользователя',
    component: Views.CreateView,
  },
  {
    id: 'users.edit',
    path: `/users/:uuid/edit`,
    title: 'Изменение пользователя',
    component: Views.EditView,
  },
  {
    id: 'users.copy',
    path: `/users/:uuid/copy`,
    title: 'Копирование пользователя',
    component: Views.CopyView,
  },
];

export default routes;
