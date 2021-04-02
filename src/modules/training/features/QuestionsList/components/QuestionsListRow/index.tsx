import React from 'react';

import { Form } from 'components';

import { QuestionsListContext } from '../';
import { TQuestionsListRowProps } from './types';

const QuestionsListRow: React.FC<TQuestionsListRowProps> = (props) => {
  const { data, isSelected = false, onSelect } = props;

  return (
    <>
      <td>
        <Form.Input.Checkbox name={`selector`} value={data.uuid} isSelected={isSelected} onSelect={onSelect} />
      </td>
      <td>{data.title}</td>
      <td>{data.sort}</td>
      <td className="data-table__cell data-table__cell--context">
        <QuestionsListContext data={data} />
      </td>
    </>
  );
};

export default QuestionsListRow;
