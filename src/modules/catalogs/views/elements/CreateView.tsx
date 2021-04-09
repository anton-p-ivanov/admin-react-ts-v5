import React from 'react';

import { TBreadcrumbs } from 'components/Breadcrumbs/types';
import PageView from 'features/PageView';

const CreateView: React.FC = () => {
  const title = `Создание нового элемента`;
  const breadcrumbs: TBreadcrumbs = [{ title: 'Справочники', url: '/catalogs/overview' }];

  return <PageView title={title} breadcrumbs={breadcrumbs} />;
};

export default CreateView;
