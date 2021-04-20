import * as Types from 'features/DataView/types';

import { StatusesListRow, StatusesListToolbar } from './components';

const columns: Types.TDataViewColumns = [
  { name: 'selector', type: 'selector' },
  { name: 'title', title: 'Статус' },
  { name: 'isDefault', title: 'По-умолчанию' },
  { name: 'sort', title: 'Сортировка' },
  { name: 'context', type: 'context' },
];

const templates: Types.TDataViewTemplates = {
  row: StatusesListRow,
  toolbar: StatusesListToolbar,
};

export { columns, templates };
