import React from 'react';

import { TBreadcrumbs } from 'components/Breadcrumbs/types';
import PageView from 'features/PageView';

import TypesList from '../../features/TypesList';

const ListView: React.FC = () => {
  const title = 'Типы справочников';
  const breadcrumbs: TBreadcrumbs = [{ title: 'Панель управления', url: '/admin' }];

  return (
    <PageView title={title} breadcrumbs={breadcrumbs}>
      <TypesList />
    </PageView>
  );
};

export default ListView;
