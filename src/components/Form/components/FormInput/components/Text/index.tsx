import React from 'react';

import { TTextProps } from './types';

const Text: React.FC<TTextProps> = (props) => {
  const { onChange, name, value = '', isDisabled = false, placeholder } = props;

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value);
  };

  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChangeHandler}
      className="form__input form__input--text"
      disabled={isDisabled}
      placeholder={placeholder}
    />
  );
};

export default Text;
