import React from 'react';

import { TBreadcrumbs } from 'components/Breadcrumbs/types';
import PageView from 'features/PageView';

import CoursesList from '../../features/CoursesList';

const ListView: React.FC = () => {
  const title = `Учебные курсы`;
  const breadcrumbs: TBreadcrumbs = [{ title: 'Обучение', url: '/training' }];

  return (
    <PageView title={title} breadcrumbs={breadcrumbs}>
      <CoursesList />
    </PageView>
  );
};

export default ListView;
