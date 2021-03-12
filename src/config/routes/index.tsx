/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

import { TRoute } from 'config/types';

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

export default [...Routes];
