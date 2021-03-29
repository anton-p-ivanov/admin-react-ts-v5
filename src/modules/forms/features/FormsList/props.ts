import * as Types from 'features/ListView/types';

import { FormsListRow, FormsListToolbar } from './components';

const columns: Types.TListViewColumns = [
  { name: 'selector', type: 'selector' },
  { name: 'title', title: 'Форма' },
  { name: 'code', title: 'Код' },
  { name: 'results', title: 'Результаты', isSortable: false },
  { name: 'updatedAt', title: 'Дата изменения' },
  { name: 'context', type: 'context' },
];

const templates: Types.TListViewTemplates = {
  row: FormsListRow,
  toolbar: FormsListToolbar,
};

const conditions: Types.TListViewConditions = {
  ...Types.DEFAULT_CONDITIONS,
  sort: '-updatedAt',
};

export { columns, templates, conditions };
