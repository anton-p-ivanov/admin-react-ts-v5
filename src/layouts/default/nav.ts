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
      ['accounts.list', 'users.list'],
      ['forms.list'],
      ['catalogs.list', 'catalogs.types.list'],
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
