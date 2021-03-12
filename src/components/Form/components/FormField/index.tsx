import React from 'react';

import Form from 'components/Form';
import Utils from 'utils';

import { TFormFieldProps } from './types';
import './styles.scss';

const FormField: React.FC<TFormFieldProps> = (props) => {
  const { field, variant = 'default', children } = props;

  const className = Utils.className({
    [`form__field`]: true,
    [`form__field--invalid`]: !!(field.errors && field.errors.length > 0),
    [`form__field--${variant}`]: true,
  });

  const wrapper = field.attrs && field.attrs.wrapper;
  const wrapperClassName = `form__wrapper form__wrapper--${wrapper ? wrapper.variant : 'default'}`;

  return (
    <div className={className}>
      {field.label && (
        <Form.Label name={field.name} isRequired={field.isRequired}>
          {field.label}
        </Form.Label>
      )}
      <div className={wrapperClassName}>
        {children || <Form.Input field={field} />}
        {field.hint && <Form.Hint field={field} />}
        {field.errors && <Form.Error field={field} />}
      </div>
    </div>
  );
};

export default FormField;
