import React from 'react';

import { TBreadcrumbs } from 'components/Breadcrumbs/types';
import PageView from 'features/PageView';

import CoursesForm from '../../features/CoursesForm';

const CopyView: React.FC = () => {
  const title = `Копирование учебного курса`;
  const breadcrumbs: TBreadcrumbs = [
    { title: 'Обучение', url: '/training' },
    { title: 'Учебные курсы', url: '/training/courses' },
  ];

  return (
    <PageView title={title} breadcrumbs={breadcrumbs}>
      <CoursesForm isNewElement={true} />
    </PageView>
  );
};

export default CopyView;
