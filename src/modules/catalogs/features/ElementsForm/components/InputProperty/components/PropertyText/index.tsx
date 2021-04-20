import React from 'react';

import { Form } from 'components';

import { TPropertyTextProps } from './types';

const PropertyText: React.FC<TPropertyTextProps> = ({ property }) => {
  return <Form.Field field={property} />;
};

export default PropertyText;
