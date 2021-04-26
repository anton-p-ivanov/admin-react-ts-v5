import { TCatalogElement } from 'modules/catalogs/config/types';
import Utils from 'utils';

const element: TCatalogElement = {
  sort: 100,
  code: 'NEW_ELEMENT',
  description: '',
  content: '',
  type: 'E',
  isActive: true,
  isSection: false,
  activeFrom: Utils.formatDate(new Date()),
  activeTo: '',
  title: 'Новый элемент',
  rootNode: '',
  catalog: '',
  parentNodes: [],
};

const section = {
  ...element,
  code: 'NEW_SECTION',
  title: 'Новый раздел',
  type: 'S',
  isSection: true,
};

export default { section, element };
