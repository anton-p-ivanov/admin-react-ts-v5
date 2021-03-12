import React from 'react';

import Utils from 'utils';

import { TFormLabelProps } from './types';
import './styles.scss';

const FormLabel: React.FC<TFormLabelProps> = (props) => {
  const { name, isRequired = false, children } = props;
  const className = Utils.className({
    [`form__label`]: true,
    [`form__label--required`]: isRequired,
  });

  return (
    <label className={className} htmlFor={name}>
      {children}
    </label>
  );
};

export default FormLabel;
