import React from 'react';

import { TBreadcrumbs } from 'components/Breadcrumbs/types';
import PageView from 'features/PageView';
import FormsForm from 'modules/forms/features/FormsForm';

const EditView: React.FC = () => {
  const title = `Изменение веб-формы`;
  const breadcrumbs: TBreadcrumbs = [{ title: 'Веб-формы', url: '/forms' }];

  return (
    <PageView title={title} breadcrumbs={breadcrumbs}>
      <FormsForm isNewElement={false} />
    </PageView>
  );
};

export default EditView;
