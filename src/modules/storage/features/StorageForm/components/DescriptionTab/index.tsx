import React, { useContext } from 'react';

import { Form } from 'components';
import { Context } from 'features/FormView';

const DescriptionTab: React.FC = () => {
  const { fields } = useContext(Context);

  return (
    <>
      <h2>Дополнительные параметры</h2>
      <Form.Field field={fields.content} variant={`default`} />
      <Form.Field field={fields.author} variant={`default`} />
    </>
  );
};

export default DescriptionTab;
