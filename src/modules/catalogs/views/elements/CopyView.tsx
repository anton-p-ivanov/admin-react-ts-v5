import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { TBreadcrumbs } from 'components/Breadcrumbs/types';
import PageView from 'features/PageView';
import { TCatalogElement } from 'modules/catalogs/config/types';
import API from 'utils/api';

import ElementsForm from '../../features/ElementsForm';

const CopyView: React.FC = () => {
  const { uuid } = useParams();
  const [data, setData] = useState<TCatalogElement>();

  const title = `Копирование элемента`;
  const breadcrumbs: TBreadcrumbs = [
    { title: 'Справочники', url: '/catalogs/overview' },
    { title: 'Элементы', url: data && `/catalogs/elements/${data.rootNode}/list` },
  ];

  useEffect(() => {
    API.request({ url: `/catalogs/elements/${uuid}` }).then((response) => setData(response.data));
  }, [uuid]);

  return (
    <PageView title={title} breadcrumbs={breadcrumbs}>
      {data && <ElementsForm data={data} isNewElement={true} />}
    </PageView>
  );
};

export default CopyView;
