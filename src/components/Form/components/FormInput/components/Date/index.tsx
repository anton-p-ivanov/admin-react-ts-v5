import React from 'react';

import { TDateProps } from './types';

const Date: React.FC<TDateProps> = (props) => {
  const { name, value = '', isDisabled = false, onChange } = props;

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value, event);
  };

  const parts = value ? value.toString().split('T') : [];

  return (
    <input
      type="date"
      name={name}
      value={parts[0] || ''}
      onChange={onChangeHandler}
      className={`form__input form__input--date`}
      disabled={isDisabled}
    />
  );
};

export default Date;
