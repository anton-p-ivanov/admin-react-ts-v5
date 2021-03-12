import { TReducerState } from './store/types';

export type TModalViewProps = {
  name?: string;
  isVisible: boolean;
  variant?: 'default' | 'danger' | 'success' | 'warning' | 'info';
};

export type TModalContext = {
  state: TReducerState;
  update: (state: TReducerState) => void;
  reset: () => void;
};
