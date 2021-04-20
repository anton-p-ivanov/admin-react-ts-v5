import React, { useContext, useEffect, useState } from 'react';

import { TTrainingCourse } from 'modules/training/config/types';
import AccountsForm from 'modules/training/features/AccountsForm';
import AccountsList from 'modules/training/features/AccountsList';
import Context from 'store';
import API, { TLookupResult } from 'utils/api';

const AccountsTab: React.FC = () => {
  const [accounts, setAccounts] = useState<TLookupResult[]>([]);
  const { formView } = useContext(Context);
  const course = formView.state.data as TTrainingCourse;

  useEffect(() => {
    API.lookup(`/accounts/lookup`).then((response) => setAccounts(response));
  }, []);

  const list = course.accounts
    .map((item) => accounts.find((o) => o.value === item))
    .filter((item) => typeof item !== 'undefined');

  return (
    <>
      <h2>Управление доступом</h2>
      <p>Выберите контрагента, которому вы хотите разрешить доступ к учебному курсу</p>
      <AccountsForm accounts={accounts} />
      <br />
      <p>Список контрагентов, имеющих доступ к учебному курсу</p>
      <AccountsList accounts={list as TLookupResult[]} />
    </>
  );
};

export default AccountsTab;
