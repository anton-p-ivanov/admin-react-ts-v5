import { TReducerState as TDataViewState } from 'features/DataView/store/types';
import { TReducerData, TReducerState as TFormViewState } from 'features/FormView/store/types';
import { TReducerState as TListViewState } from 'features/ListView/store/types';
import { TListViewConditions } from 'features/ListView/types';

export type TReducers = {
  dataView: {
    state: TDataViewState;
    update: (state: TDataViewState) => void;
  };
  listView: {
    state: TListViewState;
    update: (state: TListViewState) => void;
    request: (params: TListViewConditions) => void;
    refresh: () => void;
  };
  formView: {
    state: TFormViewState;
    update: (state: TFormViewState) => void;
    request: (endpoint: string) => void;
    reset: () => void;
    submit: (endpoint: string, data: TReducerData) => Promise<TReducerData>;
  };
};

export type TReducersContext = TReducers;
