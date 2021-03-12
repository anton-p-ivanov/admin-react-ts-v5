import { TFormFields } from 'components/Form/types';
import { TReducerData } from 'features/FormView/store/types';

export type TFormViewEndpoints = {
  request: string;
  submit: string;
};

export type TFormViewProps = {
  endpoints: TFormViewEndpoints;
  fields: TFormFields;
  defaults?: TReducerData;
  onSubmitSucceed?: (data: TReducerData) => void;
};

export type TFormViewContext = {
  fields: TFormFields;
};
