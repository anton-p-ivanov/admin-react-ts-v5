import React, { useEffect, useState } from 'react';

import hash from 'object-hash';

import { TSelectOptions, TSelectProps } from './types';
import './styles.scss';

const Select: React.FC<TSelectProps> = (props) => {
  const {
    name,
    value = '',
    isDisabled = false,
    isMultiple = false,
    onChange,
    size,
    options = [],
    optionsCallback,
    placeholder,
    variant = 'select',
  } = props;

  const [opts, setOpts] = useState<TSelectOptions>([]);
  const deps = hash(options);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setOpts(options), [deps]);

  useEffect(() => {
    optionsCallback && optionsCallback().then((options) => setOpts(options));
  }, [optionsCallback]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const targetOptions = event.target.options;
    const value: string[] = [];

    for (let i = 0, l = targetOptions.length; i < l; i++) {
      if (targetOptions[i].selected) {
        const selected = opts.find((opt) => opt.value.toString() === targetOptions[i].value);
        if (selected) {
          value.push(selected.value);
        }
      }
    }

    onChange && onChange(isMultiple ? value : value[0] || '');
  };

  return (
    <select
      className={`form__input form__input--${variant}`}
      name={name}
      value={isMultiple ? (Array.isArray(value) ? value : [value]) : value !== null ? value.toString() : ''}
      disabled={isDisabled}
      multiple={isMultiple}
      onChange={onChangeHandler}
      size={size}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {opts.map(({ value, label, isDisabled = false }) => (
        <option value={value} disabled={isDisabled} key={`option-${name}-${value}`}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Select;
