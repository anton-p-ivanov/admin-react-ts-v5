import React from 'react';

import { TDataViewColumns, TDataViewRow } from '../../types';

export type TDataViewItemsProps = {
  row: React.FC<TDataViewRow>;
  columns: TDataViewColumns;
};
