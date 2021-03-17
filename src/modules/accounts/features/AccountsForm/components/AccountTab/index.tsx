import React, { useContext } from 'react';

import { Form } from 'components';
import { Context } from 'features/FormView';

const AccountTab: React.FC = () => {
  const { fields } = useContext(Context);

  return (
    <>
      <h2>Основные параметры</h2>
      <Form.Group>
        <Form.Field field={fields.isActive} variant={`horizontal`} />
      </Form.Group>
      <Form.Group>
        <Form.Field field={fields.title} variant={`horizontal`} />
        <Form.Field field={fields.email} variant={`horizontal`} />
        <Form.Field field={fields.web} variant={`horizontal`} />
        <Form.Field field={fields.phone} variant={`horizontal`} />
      </Form.Group>
      <Form.Group>
        <Form.Field field={fields.parent} variant={`horizontal`} />
        <Form.Field field={fields.types} variant={`horizontal`} />
      </Form.Group>
    </>
  );
};

export default AccountTab;
