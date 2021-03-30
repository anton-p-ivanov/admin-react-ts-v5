import * as Types from 'features/ListView/types';

import { CoursesListRow, CoursesListToolbar } from './components';

const columns: Types.TListViewColumns = [
  { name: 'selector', type: 'selector' },
  { name: 'title', title: 'Название' },
  { name: 'code', title: 'Симв. код' },
  { name: 'sort', title: 'Сорт.' },
  { name: 'updatedAt', title: 'Дата изменения' },
  { name: 'context', type: 'context' },
];

const templates: Types.TListViewTemplates = {
  row: CoursesListRow,
  toolbar: CoursesListToolbar,
};

const conditions: Types.TListViewConditions = {
  ...Types.DEFAULT_CONDITIONS,
  sort: '-updatedAt',
};

export { columns, templates, conditions };
