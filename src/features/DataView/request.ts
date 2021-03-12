import { useReducer } from 'react';

import * as Actions from './store/creators';
import reducer, { INITIAL_STATE } from './store/reducer';
import { TReducerState, TReducer } from './store/types';

const useRequest = (initialState?: TReducerState): TReducer => {
  const [state, dispatch] = useReducer(reducer, initialState || INITIAL_STATE);

  const update = (state: TReducerState) => {
    dispatch(Actions.updateState({ ...state }));
  };

  return { state, update };
};

export default useRequest;
