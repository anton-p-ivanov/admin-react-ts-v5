import React, { useContext } from 'react';

import { Form } from 'components';
import { Context } from 'features/FormView';

const UserTab: React.FC = () => {
  const { fields } = useContext(Context);

  return (
    <>
      <h2>Пользователь</h2>
      <Form.Group>
        <Form.Field field={fields.isActive} variant={`horizontal`} />
      </Form.Group>
      <Form.Group>
        <Form.Field field={fields.lastName} variant={`horizontal`} />
        <Form.Field field={fields.firstName} variant={`horizontal`} />
        <Form.Field field={fields.secondName} variant={`horizontal`} />
      </Form.Group>
      <Form.Group>
        <Form.Field field={fields.email} variant={`horizontal`} />
        <Form.Field field={fields.phone} variant={`horizontal`} />
        <Form.Field field={fields.birthDate} variant={`horizontal`} />
      </Form.Group>
    </>
  );
};

export default UserTab;
