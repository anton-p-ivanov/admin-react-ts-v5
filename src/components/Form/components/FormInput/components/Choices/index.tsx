import React from 'react';

import Button from 'components/Button';

import { TChoicesProps } from './types';
import './styles.scss';

const Choices: React.FC<TChoicesProps> = (props) => {
  const {
    name,
    value = [],
    choices = [],
    variant = 'default',
    isMultiple = false,
    isDisabled = false,
    showToggleButton = true,
    onChange,
  } = props;

  const v = (Array.isArray(value)
    ? value
    : ['string', 'boolean'].indexOf(typeof value) !== -1
    ? [value]
    : []
  ).map((value) => value.toString());

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let arrayValue: (string | boolean)[] = [];
    if (isMultiple) {
      if (v.includes(event.target.value)) {
        arrayValue = v.filter((v) => v !== event.target.value);
      } else {
        arrayValue = [...v, event.target.value];
      }
    }

    onChange && onChange(isMultiple ? arrayValue : [event.target.value]);
  };

  const onClickHandler = () => {
    onChange && onChange(v.length < choices.length ? choices.map((choice) => choice.value) : []);
  };

  return (
    <div className={`choices choices--${variant}`}>
      {choices.map((choice) => {
        return (
          <label
            className="form-choice"
            htmlFor={`choice-${name}-${choice.value}`}
            key={`choice-${name}-${choice.value}`}
          >
            <input
              className="form-choice__input"
              id={`choice-${name}-${choice.value}`}
              name={isMultiple ? `${name}[]` : name}
              type={isMultiple ? 'checkbox' : 'radio'}
              value={choice.value.toString()}
              checked={v.includes(choice.value.toString())}
              disabled={isDisabled || choice.isDisabled || false}
              onChange={onChangeHandler}
            />
            <span className="form-choice__label">{choice.label}</span>
          </label>
        );
      })}
      {isMultiple && showToggleButton && (
        <>
          <br />
          <Button type={`button`} size={'small'} onClick={onClickHandler}>
            {v.length === choices.length ? <>Снять выделение</> : <>Выделить все</>}
          </Button>
        </>
      )}
    </div>
  );
};

export default Choices;
