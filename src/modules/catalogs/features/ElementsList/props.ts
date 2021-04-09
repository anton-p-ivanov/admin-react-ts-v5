import * as Types from 'features/ListView/types';

import { ElementsListRow, ElementsListToolbar } from './components';

const columns: Types.TListViewColumns = [
  { name: 'selector', type: 'selector' },
  { name: 'title', title: 'Название' },
  { name: 'sort', title: 'Сорт.' },
  { name: 'updatedAt', title: 'Дата изменения' },
  { name: 'context', type: 'context' },
];

const templates: Types.TListViewTemplates = {
  row: ElementsListRow,
  toolbar: ElementsListToolbar,
};

const conditions: Types.TListViewConditions = {
  ...Types.DEFAULT_CONDITIONS,
  sort: '-updatedAt',
};

export { columns, templates, conditions };
