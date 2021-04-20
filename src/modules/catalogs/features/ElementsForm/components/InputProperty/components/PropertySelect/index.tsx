import React from 'react';

import { Form } from 'components';

import { TPropertySelectProps } from './types';

const PropertySelect: React.FC<TPropertySelectProps> = ({ field, property }) => {
  const attrs = {
    input: {
      options: field.values,
      isMultiple: field.isMultiple,
      size: field.isMultiple ? 10 : 0,
      placeholder: field.isMultiple ? false : '- Выберите значение -',
    },
  };

  return <Form.Field field={{ ...property, attrs }} />;
};

export default PropertySelect;
