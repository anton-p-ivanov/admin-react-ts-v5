import { Reducer } from 'react';

export type TReducerData = {
  [key: string]: unknown;
};

export type TReducerErrors = {
  [key: string]: string[];
};

export type TReducerStatus =
  | 'WAITING'
  | 'FETCHING'
  | 'FETCH_SUCCEED'
  | 'FETCH_FAILED'
  | 'SUBMITTING'
  | 'SUBMIT_SUCCEED'
  | 'SUBMIT_FAILED';

export type TFormViewReducer = Reducer<TReducerState, TReducerAction>;

export type TReducerState = {
  status: TReducerStatus;
  errors: TReducerErrors;
  data: TReducerData;
  isUpdated: boolean;
  _timestamp: number;
};

export type TReducerAction = {
  type: number;
  payload?: TReducerState;
};

export type TReducer = {
  state: TReducerState;
  update: (state: TReducerState) => void;
  reset: () => void;
  request: (endpoint: string) => void;
  submit: (endpoint: string, data: TReducerData) => Promise<TReducerData>;
};
