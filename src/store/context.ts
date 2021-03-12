import React from 'react';

import { INITIAL_STATE as DATA_VIEW_STATE } from 'features/DataView/store/reducer';
import { INITIAL_STATE as FORM_VIEW_STATE } from 'features/FormView/store/reducer';
import { INITIAL_STATE as LIST_VIEW_STATE } from 'features/ListView/store/reducer';

import { TReducersContext } from './types';

const Context = React.createContext<TReducersContext>({
  dataView: {
    state: DATA_VIEW_STATE,
    update: () => false,
  },
  listView: {
    state: LIST_VIEW_STATE,
    update: () => false,
    request: () => false,
    refresh: () => false,
  },
  formView: {
    state: FORM_VIEW_STATE,
    update: () => false,
    request: () => false,
    reset: () => false,
    submit: () => new Promise(() => false),
  },
});

export default Context;
