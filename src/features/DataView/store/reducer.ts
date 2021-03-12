import { RESET_STATE, UPDATE_STATE } from './actions';
import { TDataViewReducer, TReducerState } from './types';

export const INITIAL_STATE: TReducerState = {
  data: [],
  selected: [],
  _timestamp: new Date().getTime(),
};

/**
 * @param state
 * @param action
 */
const DataViewReducer: TDataViewReducer = (state, action) => {
  const { payload } = action;
  const timestamp = new Date().getTime();

  switch (action.type) {
    case RESET_STATE:
      return { ...state, ...INITIAL_STATE };

    case UPDATE_STATE:
      return { ...state, ...payload, _timestamp: timestamp };

    default:
      return state;
  }
};

export default DataViewReducer;
