import React from 'react';

import { Form } from 'components';

import { useFields } from '../../hooks';

const ExtraTab: React.FC = () => {
  const fields = useFields();

  return (
    <>
      <h2>Дополнительные параметры</h2>
      <Form.Field field={fields.isDefault} />
      <Form.Field field={fields.sort} />
    </>
  );
};

export default ExtraTab;
