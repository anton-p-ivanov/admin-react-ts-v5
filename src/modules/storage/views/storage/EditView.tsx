import React from 'react';
import { useParams } from 'react-router-dom';

import { TBreadcrumbs } from 'components/Breadcrumbs/types';
import PageView from 'features/PageView';
import StorageForm from 'modules/storage/features/StorageForm';

const EditView: React.FC = () => {
  const { type = 'directory' } = useParams();

  const title = type === 'directory' ? `Изменение папки` : `Изменение файла`;
  const breadcrumbs: TBreadcrumbs = [{ title: 'Библиотека файлов', url: '/storage' }];

  return (
    <PageView title={title} breadcrumbs={breadcrumbs}>
      <StorageForm />
    </PageView>
  );
};

export default EditView;
