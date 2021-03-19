import * as Types from 'features/ListView/types';

import { AddressesListRow, AddressesListToolbar } from './components';

const columns: Types.TListViewColumns = [
  { name: 'selector', type: 'selector' },
  { name: 'type', title: 'Тип' },
  { name: 'address', title: 'Адрес' },
  { name: 'context', type: 'context' },
];

const templates: Types.TListViewTemplates = {
  row: AddressesListRow,
  toolbar: AddressesListToolbar,
};

export { columns, templates };
