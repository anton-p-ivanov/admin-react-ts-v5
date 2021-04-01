import { TDataViewColumns, TDataViewTemplates } from 'features/DataView/types';

import { LessonsListRow, LessonsListToolbar } from './components';

export const columns: TDataViewColumns = [
  { name: 'selector', type: 'selector' },
  { name: 'title', title: 'Название' },
  { name: 'sort', title: 'Сорт.' },
  { name: 'context', type: 'context' },
];

export const templates: TDataViewTemplates = {
  row: LessonsListRow,
  toolbar: LessonsListToolbar,
};
