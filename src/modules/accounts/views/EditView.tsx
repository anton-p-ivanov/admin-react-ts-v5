import React from 'react';

import { TBreadcrumbs } from 'components/Breadcrumbs/types';
import PageView from 'features/PageView';
import AccountsForm from 'modules/accounts/features/AccountsForm';

const EditView: React.FC = () => {
  const title = `Изменение контрагента`;
  const breadcrumbs: TBreadcrumbs = [{ title: 'Контрагенты', url: '/accounts' }];

  return (
    <PageView title={title} breadcrumbs={breadcrumbs}>
      <AccountsForm isNewElement={false} />
    </PageView>
  );
};

export default EditView;
