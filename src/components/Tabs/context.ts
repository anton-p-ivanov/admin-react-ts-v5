import React from 'react';

import { TTabsContext } from './types';

const Context = React.createContext<TTabsContext>({
  state: { activeTab: null },
  setState: () => null,
});

export default Context;
