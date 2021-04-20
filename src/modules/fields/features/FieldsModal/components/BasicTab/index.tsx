import React from 'react';

import { Form } from 'components';

import { useFields } from '../../hooks';

const BasicTab: React.FC = () => {
  const fields = useFields();

  return (
    <>
      <h2>Основные параметры</h2>
      <Form.Field field={fields.isActive} variant={`horizontal`} />
      <Form.Field field={fields.label} variant={`horizontal`} />
      <Form.Field field={fields.code} variant={`horizontal`} />
      <Form.Field field={fields.type} variant={`horizontal`} />
      <Form.Field field={fields.defaultValue} variant={`horizontal`} />
      <Form.Field field={fields.isMultiple} variant={`horizontal`} />
    </>
  );
};

export default BasicTab;
