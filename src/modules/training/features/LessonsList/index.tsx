import React from 'react';

import DataView from 'features/DataView';
import { useModal } from 'features/ModalView';

import LessonsModal, { Context } from '../LessonsModal';
import { templates, columns } from './props';
import { TLessonsListProps } from './types';

import './styles.scss';

const LessonsList: React.FC<TLessonsListProps> = ({ lessons }) => {
  const modal = useModal();

  return (
    <Context.Provider value={modal}>
      <DataView data={lessons} templates={templates} columns={columns} variant={`training-lessons-list`} />
      <LessonsModal />
    </Context.Provider>
  );
};

export default LessonsList;
