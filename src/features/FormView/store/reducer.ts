import * as Actions from './actions';
import * as Types from './types';

export const INITIAL_STATE: Types.TReducerState = {
  status: 'WAITING',
  data: {},
  errors: {},
  isUpdated: false,
  _timestamp: new Date().getTime(),
};

const FormViewReducer: Types.TFormViewReducer = (state, action) => {
  const { payload } = action;
  const _timestamp = new Date().getTime();

  switch (action.type) {
    case Actions.RESET_STATE:
      return { ...state, ...INITIAL_STATE };

    case Actions.UPDATE_STATE:
      return { ...state, ...payload, _timestamp };

    case Actions.FETCH_SENT:
      return { ...state, ...INITIAL_STATE, status: 'FETCHING' };

    case Actions.FETCH_SUCCEED:
      return { ...state, status: 'FETCH_SUCCEED', ...payload };

    case Actions.FETCH_FAILED:
      return { ...state, status: 'FETCH_FAILED', ...payload };

    case Actions.SUBMIT_SENT:
      return { ...state, status: 'SUBMITTING', ...payload };

    case Actions.SUBMIT_SUCCEED:
      return { ...state, status: 'SUBMIT_SUCCEED', ...payload };

    case Actions.SUBMIT_FAILED:
      return { ...state, status: 'SUBMIT_FAILED', ...payload };

    default:
      return state;
  }
};

export default FormViewReducer;
