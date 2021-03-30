import React from 'react';

import { TBreadcrumbs } from 'components/Breadcrumbs/types';
import PageView from 'features/PageView';

const EditView: React.FC = () => {
  const title = `Изменение учебного курса`;
  const breadcrumbs: TBreadcrumbs = [
    { title: 'Обучение', url: '/training' },
    { title: 'Учебные курсы', url: '/training/courses' },
  ];

  return <PageView title={title} breadcrumbs={breadcrumbs} />;
};

export default EditView;
