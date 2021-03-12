import React from 'react';

import { TPasswordProps } from './types';

const Password: React.FC<TPasswordProps> = (props) => {
  const { name, value = '', ref, isDisabled = false, placeholder, onChange } = props;

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value);
  };

  return (
    <input
      type="password"
      name={name}
      value={value.toString()}
      disabled={isDisabled}
      placeholder={placeholder}
      onChange={onChangeHandler}
      className="form__input form__input--password"
      ref={ref}
    />
  );
};

export default Password;
