import React from 'react';

import { TMailViewContext } from './types';

const Context = React.createContext<TMailViewContext>({
  fields: {},
});

export default Context;
