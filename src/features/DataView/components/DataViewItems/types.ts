import React from 'react';

import { TDataViewColumns, TDataViewRow } from '../../types';

export type TDataViewItemsProps = {
  variant: string;
  row: React.FC<TDataViewRow>;
  columns: TDataViewColumns;
};
