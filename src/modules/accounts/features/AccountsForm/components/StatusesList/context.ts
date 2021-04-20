import React from 'react';

import { TLookupResult } from 'utils/api';

const Context = React.createContext<TLookupResult[]>([]);

export default Context;
