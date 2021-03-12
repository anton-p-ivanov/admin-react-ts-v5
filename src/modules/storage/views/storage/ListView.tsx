import React from 'react';

import PageView from 'features/PageView';
import StorageList from 'modules/storage/features/StorageList';

const ListView: React.FC = () => {
  return (
    <PageView title={`Библиотека файлов`} breadcrumbs={[]}>
      <StorageList />
    </PageView>
  );
};

export default ListView;
