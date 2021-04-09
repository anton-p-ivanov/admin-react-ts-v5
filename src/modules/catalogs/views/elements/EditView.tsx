import React from 'react';

import { TBreadcrumbs } from 'components/Breadcrumbs/types';
import PageView from 'features/PageView';

const EditView: React.FC = () => {
  const title = `Изменение элемента`;
  const breadcrumbs: TBreadcrumbs = [{ title: 'Справочники', url: '/catalogs/overview' }];

  return <PageView title={title} breadcrumbs={breadcrumbs} />;
};

export default EditView;
