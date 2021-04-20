import React from 'react';

import { Form } from 'components';

import { TPropertyChoicesProps } from './types';

const PropertyChoices: React.FC<TPropertyChoicesProps> = ({ field, property }) => {
  const attrs = {
    input: {
      isMultiple: field.isMultiple,
      choices: field.values,
    },
  };

  return <Form.Field field={{ ...property, attrs }} />;
};

export default PropertyChoices;
