import React from 'react';

import { TBreadcrumbs } from 'components/Breadcrumbs/types';
import PageView from 'features/PageView';

const CopyView: React.FC = () => {
  const title = `Копирование контрагента`;
  const breadcrumbs: TBreadcrumbs = [{ title: 'Контрагенты', url: '/accounts' }];

  return <PageView title={title} breadcrumbs={breadcrumbs} />;
};

export default CopyView;
