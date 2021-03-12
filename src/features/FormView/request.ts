import { useReducer } from 'react';

import API from 'utils/api';

import * as Actions from './store/creators';
import reducer, { INITIAL_STATE } from './store/reducer';
import { TReducer, TReducerState, TReducerData } from './store/types';

const useRequest = (initialState?: TReducerState): TReducer => {
  const [state, dispatch] = useReducer(reducer, initialState || INITIAL_STATE);

  // Update component state
  const update = (state: TReducerState) => {
    dispatch(Actions.updateState(state));
  };

  // Reset component state to initial state
  const reset = () => {
    dispatch(Actions.updateState(INITIAL_STATE));
  };

  // Request data from API
  const request = (endpoint: string) => {
    const [method, url] = endpoint.split(':', 2);

    if (method !== 'GET') {
      throw Error('Invalid request method');
    }

    dispatch(Actions.fetchSent());

    API.request({ url })
      .then((response) => {
        dispatch(Actions.fetchSucceed({ ...state, data: response.data, errors: {} }));
      })
      .catch((errors) => {
        dispatch(Actions.fetchFailed({ ...state, errors }));
      });
  };

  // Send data to API

  /**
   * Update data on API server
   */
  const submit = (endpoint: string, data: TReducerData): Promise<TReducerData> => {
    const [method, url] = endpoint.split(':', 2);

    if (method !== 'PUT' && method !== 'POST') {
      throw Error('Invalid submit method');
    }

    return new Promise((resolve, reject) => {
      dispatch(Actions.submitSent(data));

      API.request({ method, url, data })
        .then((response) => {
          dispatch(Actions.submitSucceed(response.data));
          resolve(response.data);
        })
        .catch((errors) => {
          dispatch(Actions.submitFailed(errors.response ? errors.response.data : {}));
          reject(errors);
        });
    });
  };

  return { state, update, reset, request, submit };
};

export default useRequest;
