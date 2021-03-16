/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

import { TRoute } from 'config/types';
import AccountsRoutes from 'modules/accounts/config/routes';
import StorageRoutes from 'modules/storage/config/routes';
import UsersRoutes from 'modules/users/config/routes';

const Routes: TRoute[] = [
  {
    id: 'app',
    path: '/',
    title: 'Главная',
    component: () => <div>Main</div>,
  },
  {
    id: 'catalogs',
    path: '/catalogs',
    title: 'Справочники',
    component: () => <div>Catalogs</div>,
  },
  {
    id: 'admin',
    path: '/admin',
    title: 'Панель управления',
    component: () => <div>Admin</div>,
  },
];

export default [...Routes, ...StorageRoutes, ...UsersRoutes, ...AccountsRoutes];
