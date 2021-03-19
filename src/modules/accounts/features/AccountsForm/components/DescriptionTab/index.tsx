import React, { useContext } from 'react';

import { Form } from 'components';
import { Context } from 'features/FormView';

const DescriptionTab: React.FC = () => {
  const { fields } = useContext(Context);

  return (
    <>
      <h2>Текстовое описание</h2>
      <Form.Group>
        <Form.Field field={fields.description} />
        <Form.Field field={fields.content} />
      </Form.Group>
    </>
  );
};

export default DescriptionTab;
