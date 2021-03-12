import { Reducer } from 'react';

export type TModalReducer = Reducer<TReducerState, TReducerAction>;

export type TReducerData = {
  [key: string]: unknown;
};

export type TReducerState = {
  data?: TReducerData;
  isVisible: boolean;
  isValid: boolean;
  errors: {
    [key: string]: string[];
  };
};

export type TReducerAction = {
  type: number;
  payload?: TReducerState;
};

export type TReducer = {
  state: TReducerState;
  update: (state: TReducerState) => void;
  reset: () => void;
};

export const INITIAL_STATE: TReducerState = {
  errors: {},
  data: {},
  isValid: true,
  isVisible: false,
};
