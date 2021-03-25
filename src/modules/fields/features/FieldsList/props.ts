import { TDataViewColumns, TDataViewTemplates } from 'features/DataView/types';

import { FieldsListRow, FieldsListToolbar } from './components';

const columns: TDataViewColumns = [
  { name: 'selector', type: 'selector' },
  { name: 'label', title: 'Название' },
  { name: 'code', title: 'Симв. код' },
  { name: 'type', title: 'Тип' },
  { name: 'context', type: 'context' },
];

const templates: TDataViewTemplates = {
  row: FieldsListRow,
  toolbar: FieldsListToolbar,
};

export { columns, templates };
