import React from 'react';

import { Form } from 'components';

import { useFields } from './hooks';

const CourseTab: React.FC = () => {
  const fields = useFields();

  return (
    <>
      <h2>Основные параметры</h2>
      <Form.Group>
        <Form.Field field={fields.isActive} />
      </Form.Group>
      <Form.Group>
        <Form.Field field={fields.title} />
        <Form.Field field={fields.code} />
        <Form.Field field={fields.description} />
      </Form.Group>
      <Form.Group>
        <Form.Field field={fields.workflow} />
        <Form.Field field={fields.sort} />
      </Form.Group>
    </>
  );
};

export default CourseTab;
