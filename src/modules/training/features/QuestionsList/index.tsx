import React from 'react';

import DataView from 'features/DataView';
import { useModal } from 'features/ModalView';

import QuestionsModal, { Context } from '../QuestionsModal';
import { columns, templates } from './props';
import { TQuestionsListContextProps } from './types';

const QuestionsList: React.FC<TQuestionsListContextProps> = (props) => {
  const { questions } = props;
  const modal = useModal();

  return (
    <Context.Provider value={modal}>
      <DataView data={questions} templates={templates} columns={columns} variant={`training-questions-list`} />
      <QuestionsModal />
    </Context.Provider>
  );
};

export default QuestionsList;
