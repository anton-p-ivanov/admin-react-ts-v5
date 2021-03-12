import React from 'react';

import Utils from 'utils';

import { TInputTextareaProps } from './types';
import './styles.scss';

const InputTextarea: React.FC<TInputTextareaProps> = (props) => {
  const { name, value = '', size = 'medium', isDisabled = false, onChange } = props;
  const className = Utils.className({
    [`form__input`]: true,
    [`form__input--textarea`]: true,
    [`textarea`]: true,
    [`textarea--${size}`]: size,
  });

  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange && onChange(event.target.value);
  };

  return <textarea name={name} value={value} disabled={isDisabled} onChange={onChangeHandler} className={className} />;
};

export default InputTextarea;
