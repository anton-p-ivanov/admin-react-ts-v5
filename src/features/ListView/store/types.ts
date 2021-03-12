import { Reducer } from 'react';

import { TModel } from 'config/types';

export type TReducerData = TModel;

export type TReducerStatus = 'WAITING' | 'FETCHING' | 'FETCH_SUCCEED' | 'FETCH_FAILED';

export type TReducerPagination = {
  page: number;
  size: number;
  total: number;
};

export type TListViewReducer = Reducer<TReducerState, TReducerAction>;

export type TReducerState = {
  status: TReducerStatus;
  data: TReducerData[];
  pagination: TReducerPagination;
  sort: string;
  filter: Record<string, string>;
  search: string;
  _timestamp: number;
};

export type TReducerAction = {
  type: number;
  payload?: TReducerState;
};

export type TRequestParams = {
  endpoint: string;
  page: number;
  size: number;
  sort: string;
  search: string;
  filter: {
    [key: string]: string;
  };
};

export type TReducer = {
  state: TReducerState;
  update: (state: TReducerState) => void;
  request: (params: TRequestParams) => void;
  refresh: () => void;
};
