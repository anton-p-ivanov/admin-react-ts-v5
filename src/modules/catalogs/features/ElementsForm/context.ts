import React from 'react';

import { TElementsFormContext } from './types';

const Context = React.createContext<TElementsFormContext>({
  root: '',
});

export default Context;
