import React from 'react';
import { Link } from 'react-router-dom';

import { DateFormat, Form } from 'components';

import { AccountsListContext } from '../';
import { TAccountsListRowProps } from './types';

const AccountsListRow: React.FC<TAccountsListRowProps> = (props) => {
  const { data, isSelected = false, onSelect } = props;
  const workflow = data.workflow;

  return (
    <>
      <td>
        <Form.Input.Checkbox name={`selector`} value={data.uuid} isSelected={isSelected} onSelect={onSelect} />
      </td>
      <td>
        <Link to={`/accounts/${data.uuid}/edit`}>{data.title}</Link>
      </td>
      <td>{data.email}</td>
      <td>{data.web}</td>
      <td>{workflow ? <DateFormat value={workflow.updatedAt} /> : <em>нет данных</em>}</td>
      <td className="data-table__cell data-table__cell--context">
        <AccountsListContext data={data} />
      </td>
    </>
  );
};

export default AccountsListRow;
