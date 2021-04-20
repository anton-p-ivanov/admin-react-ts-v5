import React from 'react';

import { TBreadcrumbs } from 'components/Breadcrumbs/types';
import PageView from 'features/PageView';

import CatalogsList from '../../features/CatalogsList';

const ListView: React.FC = () => {
  const title = `Справочники`;
  const breadcrumbs: TBreadcrumbs = [{ title: 'Панель управления', url: '/admin' }];

  return (
    <PageView title={title} breadcrumbs={breadcrumbs}>
      <CatalogsList />
    </PageView>
  );
};

export default ListView;
