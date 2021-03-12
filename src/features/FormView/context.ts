import React from 'react';

import { TFormViewContext } from './types';

const Context = React.createContext<TFormViewContext>({
  fields: {},
});

export default Context;
