import React, { useContext } from 'react';

import { Form } from 'components';
import { Context as FormViewContext } from 'features/FormView';

import Context from '../../context';
import InputNodes from '../InputNodes';

const SectionTab: React.FC = () => {
  const { fields } = useContext(FormViewContext);
  const { root } = useContext(Context);

  return (
    <>
      <Form.Group>
        <Form.Field field={fields.title} />
        <Form.Field field={fields.code} />
        <Form.Field field={fields.parentNode}>
          <InputNodes root={root} value={fields.parentNode.value} onChange={fields.parentNode.onChange} />
        </Form.Field>
        <Form.Field field={fields.description} />
      </Form.Group>
    </>
  );
};

export default SectionTab;
