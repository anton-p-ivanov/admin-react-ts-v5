import * as Types from 'features/ListView/types';

import { PasswordsListRow } from './components';

const columns = [
  { name: 'createdAt', title: 'Выдан' },
  { name: 'expiredAt', title: 'Истекает' },
  { name: 'isExpired', title: 'Статус' },
];

const templates: Types.TListViewTemplates = {
  row: PasswordsListRow,
};

export { columns, templates };
