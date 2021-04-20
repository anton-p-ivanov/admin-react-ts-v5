import React from 'react';

import { TBreadcrumbs } from 'components/Breadcrumbs/types';
import PageView from 'features/PageView';
import FormsForm from 'modules/forms/features/FormsForm';

const CreateView: React.FC = () => {
  const title = `Создание новой веб-формы`;
  const breadcrumbs: TBreadcrumbs = [{ title: 'Веб-формы', url: '/forms' }];

  return (
    <PageView title={title} breadcrumbs={breadcrumbs}>
      <FormsForm isNewElement={true} />
    </PageView>
  );
};

export default CreateView;
