import React from 'react';

import DataView from 'features/DataView';

import { templates, columns } from './props';
import { TLessonsListProps } from './types';

import './styles.scss';

const LessonsList: React.FC<TLessonsListProps> = ({ lessons }) => {
  return <DataView data={lessons} templates={templates} columns={columns} variant={`training-lessons-list`} />;
};

export default LessonsList;
