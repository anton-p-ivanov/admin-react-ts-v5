import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { TBreadcrumbs } from 'components/Breadcrumbs/types';
import PageView from 'features/PageView';
import API from 'utils/api';

const ListView: React.FC = () => {
  const [title, setTitle] = useState<string>(`Справочники`);
  const { uuid } = useParams();

  const breadcrumbs: TBreadcrumbs = [{ title: 'Справочники', url: '/catalogs/overview' }];

  useEffect(() => {
    API.request({ url: `/catalogs/types/${uuid}` }).then((response) => {
      setTitle(`Справочники :: ${response.data.title}`);
    });
  }, [uuid]);

  return (
    <PageView title={title} breadcrumbs={breadcrumbs}>
      Catalogs list
    </PageView>
  );
};

export default ListView;
