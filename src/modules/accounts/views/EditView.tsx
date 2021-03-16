import React from 'react';

import { TBreadcrumbs } from 'components/Breadcrumbs/types';
import PageView from 'features/PageView';

const EditView: React.FC = () => {
  const title = `Изменение контрагента`;
  const breadcrumbs: TBreadcrumbs = [{ title: 'Контрагенты', url: '/accounts' }];

  return <PageView title={title} breadcrumbs={breadcrumbs} />;
};

export default EditView;
