import React, { useContext } from 'react';

import { Form } from 'components';
import { TStorage } from 'modules/storage/config/types';
import Store from 'store';

import { Input } from '../';
import { useFields } from './hooks';

const PropertiesTab: React.FC = () => {
  const fields = useFields();
  const { formView } = useContext(Store);
  const storage = formView.state.data as TStorage;

  return (
    <>
      <h2>Основные параметры</h2>
      <Form.Group>
        <Form.Field field={fields.title} />
        <Form.Field field={fields.parentNode}>
          <Input.Nodes value={fields.parentNode.value} onChange={fields.parentNode.onChange} />
        </Form.Field>
        <Form.Field field={fields.description} />
        {!storage.isDirectory && (
          <Form.Field field={fields.categories}>
            <Input.Category value={fields.categories.value} onChange={fields.categories.onChange} />
          </Form.Field>
        )}
      </Form.Group>
      {!storage.isDirectory && (
        <Form.Group>
          <Form.Field field={fields.workflow} />
        </Form.Group>
      )}
    </>
  );
};

export default PropertiesTab;
