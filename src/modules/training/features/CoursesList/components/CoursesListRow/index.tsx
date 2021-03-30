import React from 'react';
import { Link } from 'react-router-dom';

import { DateFormat, Form } from 'components';

import CoursesListContext from '../CoursesListContext';
import { TCoursesListRowProps } from './types';

const CoursesListRow: React.FC<TCoursesListRowProps> = (props) => {
  const { data, isSelected = false, onSelect } = props;
  const workflow = data.workflow;

  return (
    <>
      <td>
        <Form.Input.Checkbox name={`selector`} value={data.uuid} isSelected={isSelected} onSelect={onSelect} />
      </td>
      <td>
        <Link to={`/training/courses/${data.uuid}/edit`}>{data.title}</Link>
      </td>
      <td>{data.code}</td>
      <td>{data.sort}</td>
      <td>{workflow ? <DateFormat value={workflow.updatedAt} /> : <em>нет данных</em>}</td>
      <td className="data-table__cell data-table__cell--context">
        <CoursesListContext data={data} />
      </td>
    </>
  );
};

export default CoursesListRow;
