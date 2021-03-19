import React from 'react';

import { TNumberProps } from './types';

const Number: React.FC<TNumberProps> = (props) => {
  const { onChange, name, value = 0, min = 0, max, step = 10 } = props;

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(parseInt(event.target.value));
  };

  return (
    <input
      type="number"
      name={name}
      value={value !== null ? value.toString() : ''}
      onChange={onChangeHandler}
      className="form__input form__input--number"
      min={min}
      max={max}
      step={step}
    />
  );
};

export default Number;
