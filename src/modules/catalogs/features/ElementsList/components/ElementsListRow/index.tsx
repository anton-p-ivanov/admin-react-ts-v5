import React from 'react';

import Form from 'components/Form';

import { ElementsListContext, ElementsListTitle } from '../';
import { TElementsListRowProps } from './types';

const ElementsListRow: React.FC<TElementsListRowProps> = (props) => {
  const { data, isSelected = false, onSelect } = props;

  if (typeof data.entity === 'undefined') {
    return null;
  }

  const entity = data.entity;
  const workflow = entity.workflow;

  return (
    <>
      <td>
        <Form.Input.Checkbox name={`selector`} value={data.uuid} isSelected={isSelected} onSelect={onSelect} />
      </td>
      <td>
        <ElementsListTitle data={data} />
      </td>
      <td>{entity.sort}</td>
      <td>{workflow ? new Date(workflow.updatedAt).toUTCString() : <em>нет данных</em>}</td>
      <td className="data-table__cell data-table__cell--context">
        <ElementsListContext data={data} />
      </td>
    </>
  );
};

export default ElementsListRow;
