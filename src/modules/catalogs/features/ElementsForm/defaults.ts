import { TCatalogElement } from 'modules/catalogs/config/types';

const element: TCatalogElement = {
  sort: 100,
  code: 'NEW_ELEMENT',
  description: '',
  content: '',
  type: 'E',
  isActive: true,
  isSection: false,
  activeFrom: new Date().toUTCString(),
  activeTo: '',
  title: 'Новый элемент',
  rootNode: '',
  parentNodes: [],
};

export default element;
