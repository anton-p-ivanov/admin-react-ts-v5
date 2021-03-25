import * as Types from 'features/DataView/types';

import { ValidatorsListRow, ValidatorsListToolbar } from './components';

const columns: Types.TDataViewColumns = [
  { name: 'selector', type: 'selector' },
  { name: 'type', title: 'Валидатор' },
  { name: 'options', title: 'Параметры' },
  { name: 'context', type: 'context' },
];

const templates: Types.TDataViewTemplates = {
  row: ValidatorsListRow,
  toolbar: ValidatorsListToolbar,
};

export { columns, templates };
