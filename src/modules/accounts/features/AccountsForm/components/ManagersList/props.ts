import * as Types from 'features/ListView/types';

import { ManagersListRow } from './components';

const columns: Types.TListViewColumns = [
  { name: 'fullName', title: 'Менеджер' },
  { name: 'position', title: 'Должность' },
  { name: 'context', type: 'context' },
];

const templates: Types.TListViewTemplates = {
  row: ManagersListRow,
};

export { columns, templates };
