import React from 'react';

import { TDateTimeProps } from './types';

const InputDateTime: React.FC<TDateTimeProps> = (props) => {
  const { name, value = '', isDisabled = false, onChange } = props;

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value, event);
  };

  const parts = value ? value.toString().split(/[T+:]/) : [];

  return (
    <input
      type="datetime-local"
      name={name}
      value={parts.length > 1 ? `${parts[0]}T${parts[1]}:${parts[2]}` : ''}
      onChange={onChangeHandler}
      className={`form__input form__input--datetime`}
      disabled={isDisabled}
    />
  );
};

export default InputDateTime;
