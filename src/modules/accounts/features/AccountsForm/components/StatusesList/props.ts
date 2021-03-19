import * as Types from 'features/ListView/types';

import { StatusesListRow, StatusesListToolbar } from './components';

const columns: Types.TListViewColumns = [
  { name: 'selector', type: 'selector' },
  { name: 'title', title: 'Статус' },
  { name: 'expiredAt', title: 'Срок действия' },
  { name: 'context', type: 'context' },
];

const templates: Types.TListViewTemplates = {
  row: StatusesListRow,
  toolbar: StatusesListToolbar,
};

export { columns, templates };
