import React from 'react';

import { Form } from 'components';

import { TPropertyTextareaProps } from './types';

const PropertyTextarea: React.FC<TPropertyTextareaProps> = ({ property }) => {
  return <Form.Field field={property} />;
};

export default PropertyTextarea;
