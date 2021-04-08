import React from 'react';

import { TBreadcrumbs } from 'components/Breadcrumbs/types';
import PageView from 'features/PageView';

import CatalogsIndex from '../../features/CatalogsIndex';

const IndexView: React.FC = () => {
  const title = `Справочники`;
  const breadcrumbs: TBreadcrumbs = [];

  return (
    <PageView title={title} breadcrumbs={breadcrumbs}>
      <CatalogsIndex />
    </PageView>
  );
};

export default IndexView;
