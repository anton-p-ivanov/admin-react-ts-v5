import React from 'react';

import { Form } from 'components';

import { useFields } from '../../hooks';

const BasicTab: React.FC = () => {
  const fields = useFields();

  return (
    <>
      <h2>Основные параметры</h2>
      <Form.Field field={fields.isActive} />
      <Form.Field field={fields.title} />
      <Form.Field field={fields.description} />
    </>
  );
};

export default BasicTab;
