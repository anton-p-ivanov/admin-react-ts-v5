import React from 'react';
import { Link } from 'react-router-dom';

import { DateFormat, Form } from 'components';

import { UsersListContext } from '../';
import { TUsersListRowProps } from './types';

const UsersListRow: React.FC<TUsersListRowProps> = (props) => {
  const { data, isSelected = false, onSelect } = props;
  const workflow = data.workflow;

  return (
    <>
      <td>
        <Form.Input.Checkbox name={`selector`} value={data.uuid} isSelected={isSelected} onSelect={onSelect} />
      </td>
      <td>
        <Link to={`/users/${data.uuid}/edit`}>{data.fullName}</Link>
      </td>
      <td>
        <a href={`mailto:${data.email}`}>{data.email}</a>
      </td>
      <td>{data.birthDate ? <DateFormat value={data.birthDate} format={`date`} /> : <em>нет данных</em>}</td>
      <td>{workflow ? <DateFormat value={workflow.updatedAt} /> : <em>нет данных</em>}</td>
      <td className="data-table__cell data-table__cell--context">
        <UsersListContext data={data} />
      </td>
    </>
  );
};

export default UsersListRow;
