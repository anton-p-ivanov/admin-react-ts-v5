import React, { useContext, useEffect, useState } from 'react';

import { TAccount, TAccountManager } from 'modules/accounts/config/types';
import Store from 'store';

import ManagersForm from '../ManagersForm';
import ManagersList from '../ManagersList';
import Context from './context';
import { TManager, TManagersTabState } from './types';
import * as Utils from './utils';

const ManagersTab: React.FC = () => {
  const { formView } = useContext(Store);
  const account = formView.state.data as TAccount;
  const [users, setUsers] = useState<TManagersTabState>([]);

  useEffect(() => {
    Utils.requestManagers().then((response) => {
      setUsers(response.data.map(Utils.mapUserToManager));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const managers: TAccountManager[] = account.managers
    .filter((m) => users.find((u) => u.uuid === m))
    .map((m) => users.find((u) => u.uuid === m) as TManager);

  return (
    <Context.Provider value={users}>
      <h2>Ответственные менеджеры</h2>
      <ManagersForm />
      <br />
      <p>Список назначенных менеджеров, ответственных за взаимодействие с контрагентом</p>
      <ManagersList managers={managers} />
    </Context.Provider>
  );
};

export default ManagersTab;
