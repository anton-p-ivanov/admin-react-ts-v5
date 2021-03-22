import { TWorkflow } from 'config/types';

export type TCatalogType = {
  uuid?: string;
  title: string;
  sort: number;
  workflow?: TWorkflow;
};
