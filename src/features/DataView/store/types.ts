import { Reducer } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TReducerData = any;

export type TDataViewReducer = Reducer<TReducerState, TReducerAction>;

export type TReducerState = {
  data: TReducerData[];
  selected: string[];
  _timestamp: number;
};

export type TReducerAction = {
  type: number;
  payload?: TReducerState;
};

export type TReducer = {
  state: TReducerState;
  update: (state: TReducerState) => void;
};
