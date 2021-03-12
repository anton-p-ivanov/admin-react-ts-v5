import * as Actions from './actions';
import * as Types from './types';

export const INITIAL_STATE: Types.TReducerState = {
  status: 'WAITING',
  data: [],
  pagination: {
    page: 1,
    size: 20,
    total: 0,
  },
  filter: {},
  search: '',
  sort: '',
  _timestamp: new Date().getTime(),
};

const ListViewReducer: Types.TListViewReducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case Actions.RESET_STATE:
      return { ...state, ...INITIAL_STATE };

    case Actions.UPDATE_STATE:
      return { ...state, ...payload, _timestamp: new Date().getTime() };

    case Actions.FETCH_SENT:
      return { ...state, status: 'FETCHING' };

    case Actions.FETCH_SUCCEED:
      return { ...state, status: 'FETCH_SUCCEED', ...payload };

    case Actions.FETCH_FAILED:
      return { ...state, status: 'FETCH_FAILED' };

    default:
      return state;
  }
};

export default ListViewReducer;
