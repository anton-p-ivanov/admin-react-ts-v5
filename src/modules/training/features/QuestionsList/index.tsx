import React from 'react';

import DataView from 'features/DataView';

import { columns, templates } from './props';
import { TQuestionsListContextProps } from './types';

const QuestionsList: React.FC<TQuestionsListContextProps> = (props) => {
  const { questions } = props;

  return <DataView data={questions} templates={templates} columns={columns} variant={`training-questions-list`} />;
};

export default QuestionsList;
