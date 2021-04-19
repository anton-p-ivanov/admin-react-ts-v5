import React, { useContext } from 'react';

import { Form } from 'components';
import { Context } from 'features/FormView';

const AccessTab: React.FC = () => {
  const { fields } = useContext(Context);

  return (
    <>
      <h2>Настройка доступа</h2>
      <Form.Group>
        <Form.Field field={fields.roles} variant={'horizontal'} />
      </Form.Group>
    </>
  );
};

export default AccessTab;
