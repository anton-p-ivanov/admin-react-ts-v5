import { TRoute } from 'config/types';
import * as Views from 'modules/storage/views/storage';

const routes: TRoute[] = [
  {
    id: 'storage',
    path: '/storage',
    title: 'Библиотека файлов',
    component: Views.ListView,
  },
  {
    id: 'storage.create',
    path: '/storage/create',
    title: 'Создание новой папки',
    component: Views.CreateView,
  },
  {
    id: 'storage.create',
    path: '/storage/:node/create',
    title: 'Создание новой папки',
    component: Views.CreateView,
  },
  {
    id: 'storage.leaves',
    path: '/storage/:node',
    title: 'Библиотека файлов',
    component: Views.ListView,
  },
  {
    id: 'storage.edit',
    path: `/storage/:uuid/edit/:type`,
    title: 'Изменение файла/папки',
    component: Views.EditView,
  },
];

export default routes;
