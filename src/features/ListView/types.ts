import * as DataViewTypes from 'features/DataView/types';
import { TRequestParams } from 'features/ListView/store/types';

export const DEFAULT_CONDITIONS: TListViewConditions = {
  endpoint: 'GET:/',
  page: 1,
  sort: 'title',
  search: '',
  filter: {},
  size: 20,
};

export type TListViewConditions = TRequestParams;

export type TListViewProps = {
  endpoint: string;
  id?: string;
  templates: TListViewTemplates;
  columns: TListViewColumns;
  conditions: TListViewConditions;
};

export type TListViewColumns = DataViewTypes.TDataViewColumns;
export type TListViewTemplates = DataViewTypes.TDataViewTemplates;
