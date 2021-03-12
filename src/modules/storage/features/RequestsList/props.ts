import * as Types from 'features/ListView/types';

import { RequestsListRow, RequestsListToolbar } from './components';

const columns: Types.TListViewColumns = [
  { name: 'status', title: 'Статус' },
  { name: 'fullName', title: 'Пользователь' },
  { name: 'issueDate', title: 'Дата запроса' },
  { name: 'updatedAt', title: 'Срок действия' },
  { name: 'context', type: 'context' },
];

const templates: Types.TListViewTemplates = {
  row: RequestsListRow,
  toolbar: RequestsListToolbar,
};

const conditions: Types.TListViewConditions = {
  ...Types.DEFAULT_CONDITIONS,
  sort: 'issueDate',
  size: 0,
};

export { columns, templates, conditions };
