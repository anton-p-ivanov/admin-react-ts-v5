import React, { useContext } from 'react';

import { Form } from 'components';
import { Context } from 'features/FormView';

const CatalogTab: React.FC = () => {
  const { fields } = useContext(Context);

  return (
    <>
      <h2>Основные параметры</h2>
      <Form.Group>
        <Form.Field field={fields.isActive} variant={`horizontal`} />
      </Form.Group>
      <Form.Group>
        <Form.Field field={fields.type} variant={`horizontal`} />
        <Form.Field field={fields.title} variant={`horizontal`} />
        <Form.Field field={fields.code} variant={`horizontal`} />
        <Form.Field field={fields.description} variant={`horizontal`} />
      </Form.Group>
      <Form.Group>
        <Form.Field field={fields.isTrading} variant={`horizontal`} />
        <Form.Field field={fields.isIndexed} variant={`horizontal`} />
      </Form.Group>
      <Form.Group>
        <Form.Field field={fields.sort} variant={`horizontal`} />
      </Form.Group>
    </>
  );
};

export default CatalogTab;
