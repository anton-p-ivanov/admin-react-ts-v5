import React from 'react';

import { TBreadcrumbs } from 'components/Breadcrumbs/types';
import PageView from 'features/PageView';
import FormsList from 'modules/forms/features/FormsList';

const ListView: React.FC = () => {
  const title = `Веб-формы`;
  const breadcrumbs: TBreadcrumbs = [];

  return (
    <PageView title={title} breadcrumbs={breadcrumbs}>
      <FormsList />
    </PageView>
  );
};

export default ListView;
