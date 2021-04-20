import React from 'react';

import { Form } from 'components';

import { StatusesListContext } from '../';
import { TStatusesListRowProps } from './types';

const StatusesListRow: React.FC<TStatusesListRowProps> = (props) => {
  const { data, isSelected = false, onSelect } = props;

  return (
    <>
      <td>
        <Form.Input.Checkbox name={`selector`} value={data.uuid} isSelected={isSelected} onSelect={onSelect} />
      </td>
      <td>{data.title}</td>
      <td>{data.isDefault ? 'Да' : 'Нет'}</td>
      <td>{data.sort}</td>
      <td className="data-table__cell data-table__cell--context">
        <StatusesListContext data={data} />
      </td>
    </>
  );
};

export default StatusesListRow;
