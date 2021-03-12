import * as Actions from './actions';
import { TModalReducer, INITIAL_STATE } from './types';

const ModalReducer: TModalReducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case Actions.UPDATE_STATE:
      return { ...state, ...payload };

    case Actions.RESET_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default ModalReducer;
