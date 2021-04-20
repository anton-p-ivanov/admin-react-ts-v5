import React from 'react';

import { Form } from 'components';
import { types } from 'modules/fields/config/constants';

import FieldsListContext from '../FieldsListContext';
import { TFieldsListRowProps } from './types';

const FieldsListRow: React.FC<TFieldsListRowProps> = (props) => {
  const { data, isSelected = false, onSelect } = props;
  const type = types.find((t) => t.value === data.type);

  return (
    <>
      <td>
        <Form.Input.Checkbox name={`selector`} value={data.uuid} isSelected={isSelected} onSelect={onSelect} />
      </td>
      <td>{data.label}</td>
      <td>{data.code.toUpperCase()}</td>
      <td>{type ? type.label : <em>нет данных</em>}</td>
      <td className="data-table__cell data-table__cell--context">
        <FieldsListContext data={data} />
      </td>
    </>
  );
};

export default FieldsListRow;
