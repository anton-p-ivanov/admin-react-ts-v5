import React from 'react';

import { TCheckboxProps } from './types';
import '../../styles.scss';

const Checkbox: React.FC<TCheckboxProps> = (props) => {
  const { name, value = '', isSelected = false, isDisabled = false, onSelect } = props;
  const className = `form__input form__input--checkbox`;

  const changeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSelect && onSelect(event.target.value);
  };

  return (
    <input
      name={name}
      value={value}
      type="checkbox"
      checked={isSelected}
      disabled={isDisabled}
      className={className}
      onChange={changeEventHandler}
    />
  );
};

export default Checkbox;
