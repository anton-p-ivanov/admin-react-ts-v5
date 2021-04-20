import React from 'react';
import { Link } from 'react-router-dom';

import { DateFormat, Form } from 'components';

import { FormsListContext } from '../';
import { TFormsListRowProps } from './types';

const FormsListRow: React.FC<TFormsListRowProps> = (props) => {
  const { data, isSelected = false, onSelect } = props;
  const workflow = data.workflow;

  return (
    <>
      <td>
        <Form.Input.Checkbox name={`selector`} value={data.uuid} isSelected={isSelected} onSelect={onSelect} />
      </td>
      <td>
        <Link to={`/forms/${data.uuid}/edit`}>{data.title}</Link>
      </td>
      <td>{data.code}</td>
      <td>{0}</td>
      <td>{workflow ? <DateFormat value={workflow.updatedAt} /> : <em>нет данных</em>}</td>
      <td className="data-table__cell data-table__cell--context">
        <FormsListContext data={data} />
      </td>
    </>
  );
};

export default FormsListRow;
