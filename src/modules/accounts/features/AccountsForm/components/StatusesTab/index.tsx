import React, { useContext } from 'react';

import { TAccount } from 'modules/accounts/config/types';
import Store from 'store';

import StatusesList from '../StatusesList';

const StatusesTab: React.FC = () => {
  const { formView } = useContext(Store);
  const account = formView.state.data as TAccount;

  return (
    <>
      <h2>Партнёрские статусы</h2>
      <StatusesList statuses={account.statuses} />
    </>
  );
};

export default StatusesTab;
