import React from 'react';

import { TCatalogListContext } from './types';

const Context = React.createContext<TCatalogListContext>({
  types: [],
});

export default Context;
