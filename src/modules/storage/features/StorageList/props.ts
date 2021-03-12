import * as Types from 'features/ListView/types';

import { StorageListRow, StorageListToolbar } from './components';

const columns: Types.TListViewColumns = [
  { name: 'selector', type: 'selector' },
  { name: 'title', title: 'Название', isSortable: true },
  { name: 'size', title: 'Размер', isSortable: true },
  { name: 'updatedAt', title: 'Дата изменения' },
  { name: 'context', type: 'context' },
];

const templates: Types.TListViewTemplates = {
  row: StorageListRow,
  toolbar: StorageListToolbar,
};

const conditions: Types.TListViewConditions = Types.DEFAULT_CONDITIONS;

const id = `storage-list`;

export { id, columns, templates, conditions };
