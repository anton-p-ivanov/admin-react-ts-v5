import * as Types from 'features/ListView/types';

import { AccountsListRow, AccountsListToolbar } from './components';

const columns: Types.TListViewColumns = [
  { name: 'selector', type: 'selector' },
  { name: 'title', title: 'Название' },
  { name: 'email', title: 'E-Mail' },
  { name: 'web', title: 'Веб-сайт' },
  { name: 'updatedAt', title: 'Дата изменения' },
  { name: 'context', type: 'context' },
];

const templates: Types.TListViewTemplates = {
  row: AccountsListRow,
  toolbar: AccountsListToolbar,
};

const conditions: Types.TListViewConditions = {
  ...Types.DEFAULT_CONDITIONS,
  sort: 'title',
};

export { columns, templates, conditions };
