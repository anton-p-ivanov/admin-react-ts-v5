import React, { useContext } from 'react';

import { Form } from 'components';
import { Context } from 'features/FormView';

const LoginTab: React.FC = () => {
  const { fields } = useContext(Context);

  return (
    <>
      <Form.Group>
        <Form.Field field={fields.username} />
        <Form.Field field={fields.password} />
      </Form.Group>
    </>
  );
};

export default LoginTab;
