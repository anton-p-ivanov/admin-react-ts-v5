import React from 'react';

import { TBreadcrumbs } from 'components/Breadcrumbs/types';
import PageView from 'features/PageView';

import UsersForm from '../features/UsersForm';

const CreateView: React.FC = () => {
  const title = `Создание нового пользователя`;
  const breadcrumbs: TBreadcrumbs = [{ title: 'Пользователи', url: '/users' }];

  return (
    <PageView title={title} breadcrumbs={breadcrumbs}>
      <UsersForm isNewElement={true} />
    </PageView>
  );
};

export default CreateView;
