import React from 'react';

import './styles.scss';

const FormGroup: React.FC = ({ children }) => {
  return <div className="form__group">{children}</div>;
};

export default FormGroup;
