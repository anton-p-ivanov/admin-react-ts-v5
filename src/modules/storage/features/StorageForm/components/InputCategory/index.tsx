import React, { useState, useEffect } from 'react';

import { Form } from 'components';
import API, { TLookupResult } from 'utils/api';

import { TInputCategoryProps } from './types';

const InputCategory: React.FC<TInputCategoryProps> = (props) => {
  const [options, setOptions] = useState<TLookupResult[]>([]);

  useEffect(() => {
    API.lookup('/storage/categories/lookup').then((response) => setOptions(response));
  }, []);

  const attrs = {
    name: 'categories',
    options,
    isMultiple: true,
    size: 5,
    value: props.value,
    onChange: props.onChange,
  };

  return <Form.Input.Select {...attrs} />;
};

export default InputCategory;
