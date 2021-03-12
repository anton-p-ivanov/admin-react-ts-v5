import { useCallback, useReducer } from 'react';

import * as Actions from './store/creators';
import reducer from './store/reducer';
import { TReducer, TReducerState, INITIAL_STATE } from './store/types';

const useRequest = (): TReducer => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const update = useCallback((state: TReducerState) => {
    dispatch(Actions.updateState(state));
  }, []);

  const reset = useCallback(() => {
    dispatch(Actions.resetState());
  }, []);

  return { state, update, reset };
};

export default useRequest;
