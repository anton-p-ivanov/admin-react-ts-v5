import React from 'react';

import { TBreadcrumbs } from 'components/Breadcrumbs/types';
import PageView from 'features/PageView';

const CreateView: React.FC = () => {
  const title = `Создание нового пользователя`;
  const breadcrumbs: TBreadcrumbs = [{ title: 'Пользователи', url: '/users' }];

  return <PageView title={title} breadcrumbs={breadcrumbs} />;
};

export default CreateView;
