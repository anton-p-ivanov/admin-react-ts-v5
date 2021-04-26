import React, { useContext } from 'react';

import { Form } from 'components';
import { TCatalogElement } from 'modules/catalogs/config/types';
import Store from 'store';

import { useFields } from '../../hooks';
import InputNodes from '../InputNodes';

const ExtraTab: React.FC = () => {
  const fields = useFields();
  const { formView } = useContext(Store);
  const data = formView.state.data as TCatalogElement;

  return (
    <>
      <h2>Дополнительные параметры</h2>
      <Form.Group>
        <Form.Field field={fields.parentNodes} variant={'horizontal'}>
          <InputNodes
            root={data.rootNode}
            isMultiple={true}
            value={fields.parentNodes.value}
            onChange={fields.parentNodes.onChange}
          />
        </Form.Field>
      </Form.Group>
      <Form.Group>
        <Form.Field field={fields.sort} variant={'horizontal'} />
        <Form.Field field={fields.workflow} variant={'horizontal'} />
        <Form.Field field={fields.sites} variant={'horizontal'} />
      </Form.Group>
    </>
  );
};

export default ExtraTab;
