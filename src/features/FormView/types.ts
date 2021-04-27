import React from 'react';

import { TFormFields } from 'components/Form/types';
import { TReducerData } from 'features/FormView/store/types';

export type TFormViewEndpoints = {
  request?: string;
  submit: string;
};

export type TFormViewProps = {
  data?: TReducerData;
  endpoints: TFormViewEndpoints;
  fields: TFormFields;
  defaults?: TReducerData;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onSubmitSucceed?: (data: TReducerData) => void;
};

export type TFormViewContext = {
  fields: TFormFields;
};
