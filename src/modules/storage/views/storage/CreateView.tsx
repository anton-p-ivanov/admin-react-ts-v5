import React from 'react';

import { TBreadcrumbs } from 'components/Breadcrumbs/types';
import PageView from 'features/PageView';
import StorageForm from 'modules/storage/features/StorageForm';

const CreateView: React.FC = () => {
  const title = `Создание новой папки`;
  const breadcrumbs: TBreadcrumbs = [{ title: 'Библиотека файлов', url: '/storage' }];

  return (
    <PageView title={title} breadcrumbs={breadcrumbs}>
      <StorageForm isNewElement={true} />
    </PageView>
  );
};

export default CreateView;
