import React from 'react';

import { TBreadcrumbs } from 'components/Breadcrumbs/types';
import PageView from 'features/PageView';

const CreateView: React.FC = () => {
  const title = `Создание нового контрагента`;
  const breadcrumbs: TBreadcrumbs = [{ title: 'Контрагенты', url: '/accounts' }];

  return <PageView title={title} breadcrumbs={breadcrumbs} />;
};

export default CreateView;
