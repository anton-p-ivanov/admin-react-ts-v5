import React from 'react';

import { TBreadcrumbs } from 'components/Breadcrumbs/types';
import PageView from 'features/PageView';

const EditView: React.FC = () => {
  const title = `Изменение справочника`;
  const breadcrumbs: TBreadcrumbs = [
    { title: 'Панель управления', url: '/admin' },
    { title: 'Справочники', url: '/admin/catalogs' },
  ];

  return <PageView title={title} breadcrumbs={breadcrumbs} />;
};

export default EditView;
