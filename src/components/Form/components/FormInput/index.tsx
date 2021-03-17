import React from 'react';

import Inputs, { TInputs } from './components';
import { TFormInputProps } from './types';

type TFormInput = React.FC<TFormInputProps> & TInputs;

const FormInput: TFormInput = ({ field }) => {
  const { type = 'text', isDisabled = false, attrs = {} } = field;
  const { input = {} } = attrs || {};

  const fieldAttrs = {
    name: field.name,
    value: field.value,
    isDisabled: isDisabled,
    onChange: field.onChange,
    ref: field.ref,
  };

  const Element = Inputs[type.charAt(0).toUpperCase() + type.slice(1)];
  const props = { ...fieldAttrs, ...input };

  return Element && Element(props);
};

FormInput.Boolean = Inputs.Boolean;
FormInput.Checkbox = Inputs.Checkbox;
FormInput.Choices = Inputs.Choices;
FormInput.Date = Inputs.Date;
FormInput.Number = Inputs.Number;
FormInput.Password = Inputs.Password;
FormInput.Roles = Inputs.Roles;
FormInput.Select = Inputs.Select;
FormInput.Sites = Inputs.Sites;
FormInput.Text = Inputs.Text;
FormInput.Workflow = Inputs.Workflow;

export default FormInput;
