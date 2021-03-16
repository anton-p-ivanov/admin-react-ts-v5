import React, { useContext } from 'react';

import { Form } from 'components';
import { Context } from 'features/FormView';

const SitesTab: React.FC = () => {
  const { fields } = useContext(Context);

  return (
    <>
      <h2>Управление сайтами</h2>
      <Form.Group>
        <Form.Field field={fields.sites} />
      </Form.Group>
    </>
  );
};

export default SitesTab;
