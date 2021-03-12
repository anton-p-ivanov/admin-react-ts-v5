import React from 'react';

import * as Components from './components';
import { TFormProps } from './types';

import './styles.scss';

type TForm = React.FC<TFormProps> & {
  Error: typeof Components.FormError;
  Field: typeof Components.FormField;
  Group: typeof Components.FormGroup;
  Hint: typeof Components.FormHint;
  Input: typeof Components.FormInput;
  Label: typeof Components.FormLabel;
};

const Form: TForm = (props) => {
  const { variant = 'default', onSubmit, children } = props;

  return (
    <form className={`form form--${variant}`} method="post" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

Form.Error = Components.FormError;
Form.Field = Components.FormField;
Form.Group = Components.FormGroup;
Form.Hint = Components.FormHint;
Form.Input = Components.FormInput;
Form.Label = Components.FormLabel;

export default Form;
