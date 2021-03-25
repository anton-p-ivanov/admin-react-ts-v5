import { TNavItem } from './types';

const AppNav: TNavItem[] = [
  {
    id: 'catalogs',
    icon: 'layers',
  },
  {
    id: 'admin',
    icon: 'settings',
    items: [
      ['accounts', 'users'],
      ['admin.catalogs.list', 'admin.catalogs.types.list'],
      ['forms.list'],
      ['training.courses.list', 'training.tests.list'],
    ],
  },
  {
    id: 'storage',
    icon: 'database',
    items: [['storage']],
  },
];

export default AppNav;
