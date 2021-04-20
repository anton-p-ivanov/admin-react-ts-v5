import React from 'react';

import { Form } from 'components';

import { useFields } from '../../hooks';

const PropertiesTab: React.FC = () => {
  const fields = useFields();

  return (
    <>
      <Form.Group>
        <Form.Field field={fields.isActive} variant={`horizontal`} />
      </Form.Group>
      <Form.Group>
        <Form.Field field={fields.title} variant={`horizontal`} />
        <Form.Field field={fields.type} variant={`horizontal`} />
      </Form.Group>
      <Form.Group>
        <Form.Field field={fields.sort} variant={`horizontal`} />
        <Form.Field field={fields.value} variant={`horizontal`} />
      </Form.Group>
    </>
  );
};

export default PropertiesTab;
