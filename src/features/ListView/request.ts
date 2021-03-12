import { useReducer } from 'react';

import API from 'utils/api';

import * as Actions from './store/creators';
import reducer, { INITIAL_STATE } from './store/reducer';
import { TReducer, TReducerState, TRequestParams, TReducerPagination } from './store/types';

const useRequest = (initialState?: TReducerState): TReducer => {
  const [state, dispatch] = useReducer(reducer, initialState || INITIAL_STATE);

  const update = (state: TReducerState) => {
    dispatch(Actions.updateState(state));
  };

  /**
   * Fetch data from remote server
   */
  const request = (params: TRequestParams) => {
    const [method, url] = params.endpoint.split(':', 2);

    if (method === 'GET') {
      dispatch(Actions.fetchSent());

      const headers = {
        'X-Search-Conditions': JSON.stringify({
          sort: params.sort,
          filter: params.filter,
          search: params.search,
        }),
        'X-Pagination-Page': state.pagination.page.toString(),
        'X-Pagination-Size': params.size.toString(),
      };

      API.request({ method, url, headers })
        .then((response) => {
          const pagination: TReducerPagination = {
            total: parseInt(response.headers['x-pagination-total'] as string),
            size: parseInt(response.headers['x-pagination-size'] as string),
            page: parseInt(response.headers['x-pagination-page'] as string),
          };

          dispatch(Actions.fetchSucceed({ ...state, data: response.data, pagination }));
        })
        .catch(() => dispatch(Actions.fetchFailed()));
    }
  };

  /**
   * Refresh data
   */
  const refresh = () => {
    dispatch(Actions.updateState({ ...state }));
  };

  return { state, update, request, refresh };
};

export default useRequest;
