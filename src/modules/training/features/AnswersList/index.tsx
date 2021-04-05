import React from 'react';

import DataView from 'features/DataView';

import { templates, columns } from './props';
import { TAnswersListContextProps } from './types';

import './styles.scss';

const AnswersList: React.FC<TAnswersListContextProps> = ({ answers }) => {
  return <DataView data={answers} columns={columns} templates={templates} variant={`training-answers-list`} />;
};

export default AnswersList;
