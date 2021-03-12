import React from 'react';

import { TDataColumn } from 'components/DataTable/types';

import { TReducerData } from './store/types';

export type TDataViewProps = {
  data: TReducerData[];
  templates: TDataViewTemplates;
  columns: TDataViewColumns;
  isSearchEnabled?: boolean;
  variant?: string;
};

export type TDataViewRow = {
  data: TReducerData;
  isSelected: boolean;
  onSelect: (value: string) => void;
};

export type TDataViewToolbar = {
  isRowsSelected: boolean;
};

export type TDataViewFilter = {
  applyFilter: (filter: Record<string, string>) => void;
  resetFilter: () => void;
};

export type TDataViewTemplates = {
  row: React.FC<TDataViewRow>;
  toolbar?: React.FC<TDataViewToolbar>;
  filter?: React.FC<TDataViewFilter>;
};

export type TDataViewColumn = TDataColumn;
export type TDataViewColumns = TDataViewColumn[];
