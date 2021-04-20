import React from 'react';

import { TBreadcrumbs } from 'components/Breadcrumbs/types';
import PageView from 'features/PageView';

import UsersForm from '../features/UsersForm';

const EditView: React.FC = () => {
  const title = `Изменение пользователя`;
  const breadcrumbs: TBreadcrumbs = [{ title: 'Пользователи', url: '/users' }];

  return (
    <PageView title={title} breadcrumbs={breadcrumbs}>
      <UsersForm isNewElement={false} />
    </PageView>
  );
};

export default EditView;
