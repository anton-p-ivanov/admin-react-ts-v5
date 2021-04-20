import React from 'react';

import { TBreadcrumbs } from 'components/Breadcrumbs/types';
import PageView from 'features/PageView';

const CreateView: React.FC = () => {
  const title = `Создание нового онлайн-теста`;
  const breadcrumbs: TBreadcrumbs = [
    { title: 'Обучение', url: '/training' },
    { title: 'Онлайн-тесты', url: '/training/tests' },
  ];

  return <PageView title={title} breadcrumbs={breadcrumbs} />;
};

export default CreateView;
