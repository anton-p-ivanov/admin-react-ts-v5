import * as Types from 'features/DataView/types';

import { ValuesListRow, ValuesListToolbar } from './components';

const columns: Types.TDataViewColumns = [
  { name: 'selector', type: 'selector' },
  { name: 'label', title: 'Подпись' },
  { name: 'value', title: 'Значение' },
  { name: 'sort', title: 'Сорт.' },
  { name: 'context', type: 'context' },
];

const templates: Types.TDataViewTemplates = {
  row: ValuesListRow,
  toolbar: ValuesListToolbar,
};

export { columns, templates };
