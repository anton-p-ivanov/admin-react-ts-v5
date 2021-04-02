import React from 'react';

import { Form } from 'components';

import { useFields } from '../../hooks';

const DescriptionTab: React.FC = () => {
  const fields = useFields();

  return (
    <Form.Group>
      <Form.Field field={fields.description} />
    </Form.Group>
  );
};

export default DescriptionTab;
