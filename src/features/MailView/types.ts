import { TFormFields } from 'components/Form/types';
import { TMailTemplate } from 'config/types';

export type TMailViewState = {
  data?: TMailTemplate;
  errors: Record<string, string[]>;
};

export type TMailViewReducer = {
  state: TMailViewState;
  update: (state: TMailViewState) => void;
};

export type TMailViewProps = {
  defaults?: TMailTemplate;
  reducer: TMailViewReducer;
};

export type TMailViewContext = {
  fields: TFormFields;
};
