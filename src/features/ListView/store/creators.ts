import * as Actions from './actions';
import { TReducerAction, TReducerState } from './types';

const updateState = (payload: TReducerState): TReducerAction => ({
  type: Actions.UPDATE_STATE,
  payload: payload,
});

const fetchSent = (): TReducerAction => ({
  type: Actions.FETCH_SENT,
});

const fetchSucceed = (payload: TReducerState): TReducerAction => ({
  type: Actions.FETCH_SUCCEED,
  payload: payload,
});

const fetchFailed = (): TReducerAction => ({
  type: Actions.FETCH_FAILED,
});

export { updateState, fetchSent, fetchSucceed, fetchFailed };
