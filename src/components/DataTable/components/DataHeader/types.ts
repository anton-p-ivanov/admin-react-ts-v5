import { TDataColumn, TDataSelectorColumn } from '../../types';

export type TDataHeaderProps = {
  column: TDataColumn | TDataSelectorColumn;
};

export type THeaderDefaultProps = {
  column: TDataColumn;
};

export type THeaderSelectorProps = {
  column: TDataSelectorColumn;
};
