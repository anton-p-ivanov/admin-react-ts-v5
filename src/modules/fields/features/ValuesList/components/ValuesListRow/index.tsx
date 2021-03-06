import React from 'react';

import { Form } from 'components';

import { ValuesListContext } from '../';
import { TValuesListRowProps } from './types';

const ValuesListRow: React.FC<TValuesListRowProps> = (props) => {
  const { data, isSelected = false, onSelect } = props;

  return (
    <>
      <td>
        <Form.Input.Checkbox name={`selector`} value={data.value} isSelected={isSelected} onSelect={onSelect} />
      </td>
      <td>{data.label}</td>
      <td>{data.value}</td>
      <td>{data.sort}</td>
      <td className={`data-table__cell data-table__cell--context`}>
        <ValuesListContext data={data} />
      </td>
    </>
  );
};

export default ValuesListRow;
