import React from 'react';

import PageView from 'features/PageView';

import AccountsList from '../features/AccountsList';

const ListView: React.FC = () => {
  return (
    <PageView title={`Контрагенты`} breadcrumbs={[]}>
      <AccountsList />
    </PageView>
  );
};

export default ListView;
