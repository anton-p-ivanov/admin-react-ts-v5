import React, { useEffect, useState } from 'react';

import hash from 'object-hash';

import Button from 'components/Button';

import { TChoices, TChoicesProps } from './types';

import './styles.scss';

const Choices: React.FC<TChoicesProps> = (props) => {
  const {
    name,
    value = [],
    choices = [],
    choicesCallback,
    variant = 'default',
    isMultiple = false,
    isDisabled = false,
    showToggleButton = true,
    onChange,
  } = props;

  const [opts, setOpts] = useState<TChoices>(choices);
  const deps = hash(choices);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setOpts(choices), [deps]);

  useEffect(() => {
    choicesCallback && choicesCallback().then((options) => setOpts(options));
  }, [choicesCallback]);

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
    onChange && onChange(v.length < opts.length ? opts.map((choice) => choice.value) : []);
  };

  return (
    <div className={`choices choices--${variant}`}>
      {opts.map((choice) => {
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
            {v.length === opts.length ? <>Снять выделение</> : <>Выделить все</>}
          </Button>
        </>
      )}
    </div>
  );
};

export default Choices;
