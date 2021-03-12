import { TDataSort } from './components/DataSort/types';

export type TDataColumn = {
  name: string;
  type?: 'default' | 'selector' | 'context';
  title?: string;
  isSortable?: boolean;
  sort?: TDataSort;
};

export type TDataTableProps = {
  columns: TDataColumn[];
};

export type TDataSelectorColumn = {
  name: string;
  type?: 'selector';
  isSelected: boolean;
  onSelect: (value: string) => void;
};
