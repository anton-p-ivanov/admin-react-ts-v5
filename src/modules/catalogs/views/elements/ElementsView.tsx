import React from 'react';

import { TBreadcrumbs } from 'components/Breadcrumbs/types';
import PageView from 'features/PageView';

const ElementsView: React.FC = () => {
  const title = `Элементы`;
  const breadcrumbs: TBreadcrumbs = [{ title: 'Справочники', url: '/catalogs/overview' }];

  return (
    <PageView title={title} breadcrumbs={breadcrumbs}>
      Elements List
    </PageView>
  );
};

export default ElementsView;
