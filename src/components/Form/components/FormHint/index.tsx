import React from 'react';

import { TFormHintProps } from './types';
import './styles.scss';

const FormHint: React.FC<TFormHintProps> = ({ field, children }) => {
  const { hint } = field || {};
  return <div className="form__hint">{hint || children}</div>;
};

export default FormHint;
