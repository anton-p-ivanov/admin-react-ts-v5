import React, { useContext } from 'react';

import { Form } from 'components';
import { Context } from 'features/FormView';

const TemplateTab: React.FC = () => {
  const { fields } = useContext(Context);

  return (
    <>
      <h2>Выбор шаблона формы</h2>
      <Form.Group>
        <Form.Field field={fields.isTemplateActive} />
      </Form.Group>
      <Form.Group>
        <Form.Field field={fields.template} />
      </Form.Group>
    </>
  );
};

export default TemplateTab;
