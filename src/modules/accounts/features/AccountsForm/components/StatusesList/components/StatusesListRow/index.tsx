import React, { useContext } from 'react';

import { DateFormat, Form } from 'components';

import { StatusesListContext } from '../';
import Context from '../../context';
import { TStatusesListRowProps } from './types';

const StatusesListRow: React.FC<TStatusesListRowProps> = (props) => {
  const { data, isSelected, onSelect } = props;
  const statuses = useContext(Context);

  const status = statuses.find((s) => s.value === data.status);

  return (
    <>
      <td>
        <Form.Input.Checkbox name={`selector`} value={data.uuid} isSelected={isSelected} onSelect={onSelect} />
      </td>
      <td>{status?.label}</td>
      <td>{data.expiredAt ? <DateFormat value={data.expiredAt} format={`date`} /> : <em>Не ограничен</em>}</td>
      <td className="data-table__cell data-table__cell--context">
        <StatusesListContext data={data} />
      </td>
    </>
  );
};

export default StatusesListRow;
