import React from 'react';

import { TBreadcrumbs } from 'components/Breadcrumbs/types';
import PageView from 'features/PageView';

import UsersForm from '../features/UsersForm';

const CopyView: React.FC = () => {
  const title = `Копирование пользователя`;
  const breadcrumbs: TBreadcrumbs = [{ title: 'Пользователи', url: '/users' }];

  return (
    <PageView title={title} breadcrumbs={breadcrumbs}>
      <UsersForm isNewElement={true} />
    </PageView>
  );
};

export default CopyView;
