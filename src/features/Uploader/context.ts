import React from 'react';

import { INITIAL_STATE } from 'features/ModalView/store/types';

import { TUploaderContext, INITIAL_DATA } from './types';

const Context = React.createContext<TUploaderContext>({
  state: { ...INITIAL_STATE, data: INITIAL_DATA },
  update: () => false,
  reset: () => false,
  select: () => false,
  onComplete: () => false,
});

export default Context;
