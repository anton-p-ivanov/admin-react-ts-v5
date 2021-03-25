import React from 'react';

import { Form } from 'components';

import { useFields } from '../../hooks';

const ExtraTab: React.FC = () => {
  const fields = useFields();

  return (
    <>
      <h2>Дополнительные параметры</h2>
      <Form.Field field={fields.options} variant={`horizontal`} />
      <Form.Field field={fields.sort} variant={`horizontal`} />
    </>
  );
};

export default ExtraTab;
