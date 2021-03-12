import * as Actions from './actions';
import * as Types from './types';

const updateState = (state: Types.TReducerState): Types.TReducerAction => ({
  type: Actions.UPDATE_STATE,
  payload: state,
});

const fetchSent = (): Types.TReducerAction => ({
  type: Actions.FETCH_SENT,
});

const fetchSucceed = (payload: Types.TReducerState): Types.TReducerAction => ({
  type: Actions.FETCH_SUCCEED,
  payload,
});

const fetchFailed = (payload: Types.TReducerState): Types.TReducerAction => ({
  type: Actions.FETCH_FAILED,
  payload,
});

const submitSent = (payload: Types.TReducerData): Types.TReducerAction => ({
  type: Actions.SUBMIT_SENT,
  payload: { data: payload, errors: {} } as Types.TReducerState,
});

const submitSucceed = (payload: Types.TReducerData): Types.TReducerAction => ({
  type: Actions.SUBMIT_SUCCEED,
  payload: { data: payload } as Types.TReducerState,
});

const submitFailed = (payload: Types.TReducerErrors): Types.TReducerAction => ({
  type: Actions.SUBMIT_FAILED,
  payload: { errors: payload } as Types.TReducerState,
});

export { updateState, fetchSent, fetchSucceed, fetchFailed, submitSent, submitSucceed, submitFailed };
