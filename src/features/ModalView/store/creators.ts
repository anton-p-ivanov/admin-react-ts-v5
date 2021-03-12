import { RESET_STATE, UPDATE_STATE } from './actions';
import { TReducerAction, TReducerState } from './types';

const updateState = (state: TReducerState): TReducerAction => ({
  type: UPDATE_STATE,
  payload: state,
});

const resetState = (): TReducerAction => ({
  type: RESET_STATE,
});

export { updateState, resetState };
