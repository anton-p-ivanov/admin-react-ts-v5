import React from 'react';

import { TReducerData } from '../../store/types';
import { TDataViewRow } from '../../types';

export type TDataViewRowProps = {
  data: TReducerData;
  template: React.FC<TDataViewRow>;
};
