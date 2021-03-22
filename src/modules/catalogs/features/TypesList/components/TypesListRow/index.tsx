import React from 'react';

import { Form, DateFormat } from 'components';

import TypesListContext from '../TypesListContext';
import { TTypesListRowProps } from './types';

const TypesListRow: React.FC<TTypesListRowProps> = (props) => {
  const { data, isSelected = false, onSelect } = props;
  const workflow = data.workflow;

  return (
    <>
      <td>
        <Form.Input.Checkbox name={`selector`} value={data.uuid} isSelected={isSelected} onSelect={onSelect} />
      </td>
      <td>{data.title}</td>
      <td>{data.sort}</td>
      <td>{workflow ? <DateFormat value={workflow.updatedAt} /> : <em>нет данных</em>}</td>
      <td className="data-table__cell data-table__cell--context">
        <TypesListContext data={data} />
      </td>
    </>
  );
};

export default TypesListRow;
