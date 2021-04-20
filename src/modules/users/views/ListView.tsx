import React from 'react';

import PageView from 'features/PageView';

import UsersList from '../features/UsersList';

const ListView: React.FC = () => {
  return (
    <PageView title={`Пользователи`} breadcrumbs={[]}>
      <UsersList />
    </PageView>
  );
};

export default ListView;
