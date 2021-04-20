import React from 'react';

import { TBreadcrumbs } from 'components/Breadcrumbs/types';
import PageView from 'features/PageView';

import CatalogsForm from '../../features/CatalogsForm';

const EditView: React.FC = () => {
  const title = `Изменение справочника`;
  const breadcrumbs: TBreadcrumbs = [
    { title: 'Панель управления', url: '/admin' },
    { title: 'Справочники', url: '/admin/catalogs' },
  ];

  return (
    <PageView title={title} breadcrumbs={breadcrumbs}>
      <CatalogsForm isNewElement={false} />
    </PageView>
  );
};

export default EditView;
