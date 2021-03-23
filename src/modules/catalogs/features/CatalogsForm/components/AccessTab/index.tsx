import React, { useContext } from 'react';

import { Form } from 'components';
import { Context } from 'features/FormView';

const AccessTab: React.FC = () => {
  const { fields } = useContext(Context);

  return (
    <>
      <h2>Управление доступом</h2>
      <p>Выберите сайты, на которых будут доступны опубликованные элементы этого справочника.</p>
      <Form.Group>
        <Form.Field field={fields.sites} />
      </Form.Group>
    </>
  );
};

export default AccessTab;
