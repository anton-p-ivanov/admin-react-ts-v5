/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export type TFormFieldValue = string | string[] | boolean | number;
export type TFormFieldType =
  | 'text'
  | 'textarea'
  | 'checkbox'
  | 'choices'
  | 'boolean'
  | 'select'
  | 'static'
  | 'date'
  | 'dateTime'
  | 'number'
  | 'lookup'
  | 'roles'
  | 'sites'
  | 'password'
  | 'range'
  | 'workflow';

export type TFormField<T extends TFormFieldValue> = {
  name: string;
  label: string;
  hint?: string | React.ClassicElement<unknown>;
  type?: TFormFieldType;
  isRequired?: boolean;
  isDisabled?: boolean;
  value?: T;
  emptyValue?: T;
  errors?: string[];
  onChange?: (value: T) => void;
  attrs?: {
    input?: Record<string, unknown>;
    label?: Record<string, unknown>;
    wrapper?: { variant: string };
  };
  ref?: React.RefObject<HTMLInputElement>;
};

export type TFormFields = {
  [key: string]: TFormField<any>;
};

export type TFormFieldProps = {
  field: TFormField<string> | TFormField<string[]> | TFormField<boolean>;
  variant?: 'horizontal' | 'default';
};
