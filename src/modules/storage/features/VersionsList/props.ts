import * as Types from 'features/ListView/types';

import { VersionsListRow, VersionsListToolbar } from './components';

const columns: Types.TListViewColumns = [
  { name: 'name', title: 'Имя файла' },
  { name: 'size', title: 'Размер' },
  { name: 'uploaded', title: 'Дата загрузки' },
  { name: 'context', type: 'context' },
];

const templates: Types.TListViewTemplates = {
  row: VersionsListRow,
  toolbar: VersionsListToolbar,
};

const conditions: Types.TListViewConditions = {
  ...Types.DEFAULT_CONDITIONS,
  sort: '-uploaded',
  size: 0,
};

export { columns, templates, conditions };
