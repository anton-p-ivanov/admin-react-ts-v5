import { TWorkflow } from 'config/types';

export type TCatalog = {
  uuid?: string;
  code: string;
  title: string;
  description: string;
  sort: number;
  isActive: boolean;
  isTrading: boolean;
  isIndexed: boolean;
  type: string;
  workflow?: TWorkflow;
};

export type TCatalogType = {
  uuid?: string;
  title: string;
  sort: number;
  workflow?: TWorkflow;
};
