import React from 'react';

import { Form } from 'components';

import LessonsListContext from '../LessonsListContext';
import { TLessonsListRowProps } from './types';

const LessonsListRow: React.FC<TLessonsListRowProps> = (props) => {
  const { data, isSelected = false, onSelect } = props;

  return (
    <>
      <td>
        <Form.Input.Checkbox name={`selector`} value={data.uuid} isSelected={isSelected} onSelect={onSelect} />
      </td>
      <td>{data.title}</td>
      <td>{data.sort}</td>
      <td className="data-table__cell data-table__cell--context">
        <LessonsListContext data={data} />
      </td>
    </>
  );
};

export default LessonsListRow;
