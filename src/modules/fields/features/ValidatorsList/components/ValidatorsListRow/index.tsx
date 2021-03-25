import React from 'react';

import { Form } from 'components';
import { validators } from 'modules/fields/config/constants';

import { ValidatorsListContext } from '../';
import { TValidatorsListRowProps } from './types';

const ValidatorsListRow: React.FC<TValidatorsListRowProps> = (props) => {
  const { data, isSelected = false, onSelect } = props;
  const type = validators.find((t) => t.value === data.type);

  return (
    <>
      <td>
        <Form.Input.Checkbox name={`selector`} value={data.uuid} isSelected={isSelected} onSelect={onSelect} />
      </td>
      <td>{type ? type.label : <em>Неизвестный тип</em>}</td>
      <td>{data.options}</td>
      <td>
        <ValidatorsListContext data={data} />
      </td>
    </>
  );
};

export default ValidatorsListRow;
