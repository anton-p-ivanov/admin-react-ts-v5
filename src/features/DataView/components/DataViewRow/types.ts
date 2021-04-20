import React from 'react';

import { TReducerData } from '../../store/types';
import { TDataViewRow } from '../../types';

export type TDataViewRowProps = {
  variant: string;
  data: TReducerData;
  template: React.FC<TDataViewRow>;
};
