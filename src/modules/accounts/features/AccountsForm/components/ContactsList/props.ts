import * as Types from 'features/ListView/types';

import { ContactsListRow, ContactsListToolbar } from './components';

const columns: Types.TListViewColumns = [
  { name: 'selector', type: 'selector' },
  { name: 'fullName', title: 'Контактное лицо' },
  { name: 'email', title: 'E-Mail' },
  { name: 'position', title: 'Должность' },
  { name: 'context', type: 'context' },
];

const templates: Types.TListViewTemplates = {
  row: ContactsListRow,
  toolbar: ContactsListToolbar,
};

export { columns, templates };
