import React from 'react';

import { INITIAL_STATE } from 'features/ModalView/store/types';
import { TModalContext } from 'features/ModalView/types';

const Context = React.createContext<TModalContext>({
  state: INITIAL_STATE,
  update: () => false,
  reset: () => false,
});

export default Context;
