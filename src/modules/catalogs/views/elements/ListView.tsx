import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { TBreadcrumbs } from 'components/Breadcrumbs/types';
import PageView from 'features/PageView';
import ElementsList from 'modules/catalogs/features/ElementsList';
import API from 'utils/api';

const ListView: React.FC = () => {
  const { uuid } = useParams();
  const [title, setTitle] = useState<string>(`Элементы`);

  const breadcrumbs: TBreadcrumbs = [{ title: 'Справочники', url: '/catalogs/overview' }];

  useEffect(() => {
    API.request({ url: `/catalogs/${uuid}/path` }).then((response) => {
      setTitle(response.data.shift().title);
    });
  }, [uuid]);

  return (
    <PageView title={title} breadcrumbs={breadcrumbs}>
      <ElementsList node={uuid} />
    </PageView>
  );
};

export default ListView;
