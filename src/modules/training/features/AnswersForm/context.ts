import React from 'react';

import { TAnswersFormContext, INITIAL_STATE } from './types';

const Context = React.createContext<TAnswersFormContext>({
  state: INITIAL_STATE,
  setState: () => false,
});

export default Context;
