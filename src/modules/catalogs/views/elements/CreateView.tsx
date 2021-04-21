import React from 'react';
import { useParams } from 'react-router-dom';

import { TBreadcrumbs } from 'components/Breadcrumbs/types';
import PageView from 'features/PageView';

import ElementsForm from '../../features/ElementsForm';

const CreateView: React.FC = () => {
  const { uuid } = useParams();
  const title = `Создание нового элемента`;
  const breadcrumbs: TBreadcrumbs = [
    { title: 'Справочники', url: '/catalogs/overview' },
    { title: 'Элементы', url: `/catalogs/elements/${uuid}/list` },
  ];

  return (
    <PageView title={title} breadcrumbs={breadcrumbs}>
      <ElementsForm isNewElement={true} />
    </PageView>
  );
};

export default CreateView;
