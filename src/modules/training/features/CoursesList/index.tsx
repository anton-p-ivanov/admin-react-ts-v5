import React from 'react';

import ListView from 'features/ListView';

import { conditions, templates, columns } from './props';

const CoursesList: React.FC = () => {
  return (
    <ListView
      endpoint={`GET:/training/courses`}
      columns={columns}
      templates={templates}
      conditions={conditions}
      id={`training-courses`}
    />
  );
};

export default CoursesList;
