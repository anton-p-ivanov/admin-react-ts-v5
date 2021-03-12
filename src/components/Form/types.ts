import React from 'react';

import * as Type from './components/FormField/types';

export type TFormProps = {
  variant?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

export type TFormField<T extends Type.TFormFieldValue> = Type.TFormField<T>;
export type TFormFields = Type.TFormFields;
