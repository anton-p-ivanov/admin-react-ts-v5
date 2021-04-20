import React from 'react';

import Choices from '../Choices';
import { TChoicesValue } from '../Choices/types';
import { TBooleanProps } from './types';

const INITIAL_CHOICES = [
  { value: true, label: 'Да' },
  { value: false, label: 'Нет' },
];

const Boolean: React.FC<TBooleanProps> = (props) => {
  const { name, choices = INITIAL_CHOICES, variant, value = [false], isDisabled = false, onChange } = props;

  const onChangeHandler = (value: TChoicesValue) => {
    onChange && onChange(value[0] === 'true');
  };

  return (
    <Choices
      name={name}
      choices={choices}
      variant={variant}
      value={value}
      isMultiple={false}
      isDisabled={isDisabled}
      onChange={onChangeHandler}
    />
  );
};

export default Boolean;
