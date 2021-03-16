import * as Types from 'features/ListView/types';

import { UsersListRow, UsersListToolbar } from './components';

const columns: Types.TListViewColumns = [
  { name: 'selector', type: 'selector' },
  { name: 'fullName', title: 'Пользователь', isSortable: true },
  { name: 'email', title: 'E-Mail', isSortable: true },
  { name: 'account', title: 'Компания', isSortable: true },
  { name: 'updatedAt', title: 'Дата изменения' },
  { name: 'context', type: 'context' },
];

const templates: Types.TListViewTemplates = {
  row: UsersListRow,
  toolbar: UsersListToolbar,
};

const conditions: Types.TListViewConditions = {
  ...Types.DEFAULT_CONDITIONS,
  sort: '-updatedAt',
};

const id = `users-list`;

export { id, columns, templates, conditions };
