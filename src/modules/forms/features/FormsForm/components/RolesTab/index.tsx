import React, { useContext } from 'react';

import { Form } from 'components';
import { Context } from 'features/FormView';

const RolesTab: React.FC = () => {
  const { fields } = useContext(Context);

  return (
    <>
      <h2>Управление ролями</h2>
      <Form.Group>
        <Form.Field field={fields.roles} />
      </Form.Group>
    </>
  );
};

export default RolesTab;
