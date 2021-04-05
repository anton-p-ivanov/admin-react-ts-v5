import { TDataViewColumns, TDataViewTemplates } from 'features/DataView/types';

import { AnswersListRow } from './components';

const columns: TDataViewColumns = [
  { name: 'isValid', title: 'Прав.' },
  { name: 'answer', title: 'Ответ' },
  { name: 'delete', title: '' },
];

const templates: TDataViewTemplates = {
  row: AnswersListRow,
};

export { columns, templates };
