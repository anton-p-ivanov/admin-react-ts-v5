import React from 'react';

import { Form } from 'components';

import { useFields } from '../../hooks';

const PropertiesTab: React.FC = () => {
  const fields = useFields();

  return (
    <>
      <h2>Параметры урока</h2>
      <Form.Group>
        <Form.Field field={fields.isActive} />
        <Form.Field field={fields.title} />
        <Form.Field field={fields.description} />
        <Form.Field field={fields.sort} />
      </Form.Group>
    </>
  );
};

export default PropertiesTab;
