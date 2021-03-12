import { UPDATE_STATE } from './actions';
import { TReducerAction, TReducerState } from './types';

const updateState = (state: TReducerState): TReducerAction => ({
  type: UPDATE_STATE,
  payload: { ...state },
});

export { updateState };
