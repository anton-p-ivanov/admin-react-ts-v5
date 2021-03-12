import React from 'react';

import { TFormErrorProps } from './types';
import './styles.scss';

const FormError: React.FC<TFormErrorProps> = ({ field }) => {
  const { errors = [] } = field;
  return <div className="form__error">{errors.join('<br>')}</div>;
};

export default FormError;
