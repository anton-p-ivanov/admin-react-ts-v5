import { TWorkflow } from 'config/types';
import { TField } from 'modules/fields/config/types';

export type TCatalog = {
  uuid?: string;
  code: string;
  title: string;
  description: string;
  sort: number;
  isActive: boolean;
  isTrading: boolean;
  isIndexed: boolean;
  tree: string;
  type?: string;
  fields: TField[];
  workflow?: TWorkflow;
};

export type TCatalogType = {
  uuid?: string;
  title: string;
  sort: number;
  workflow?: TWorkflow;
};

export type TCatalogTree = {
  [key: string]: unknown;
  uuid: string;
  entity: TCatalogElement;
};

export type TCatalogElement = {
  uuid?: string;
  title: string;
  description: string;
  content: string;
  code: string;
  sort: number;
  type: string;
  isSection: boolean;
  isActive: boolean;
  activeFrom: string;
  activeTo: string;
  catalog: string;
  rootNode: string;
  parentNodes: string[];
  workflow?: TWorkflow;
};

export type TCatalogValue = {
  uuid?: string;
  field: string;
  value: string;
};
