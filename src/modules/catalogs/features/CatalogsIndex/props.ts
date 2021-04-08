import * as Types from 'features/ListView/types';

import { CatalogsIndexRow } from './components';

const columns: Types.TListViewColumns = [
  { name: 'title', title: 'Название' },
  { name: 'elements', title: 'Элементов' },
];

const templates: Types.TListViewTemplates = {
  row: CatalogsIndexRow,
};

export { columns, templates };
