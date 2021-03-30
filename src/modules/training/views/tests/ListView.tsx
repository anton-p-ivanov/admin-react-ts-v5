import React from 'react';

import { TBreadcrumbs } from 'components/Breadcrumbs/types';
import PageView from 'features/PageView';

const ListView: React.FC = () => {
  const title = `Онлайн-тесты`;
  const breadcrumbs: TBreadcrumbs = [{ title: 'Обучение', url: '/training' }];

  return <PageView title={title} breadcrumbs={breadcrumbs} />;
};

export default ListView;
