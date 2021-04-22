import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { TBreadcrumbs } from 'components/Breadcrumbs/types';
import PageView from 'features/PageView';
import { TCatalogElement } from 'modules/catalogs/config/types';

import ElementsForm, { defaults } from '../../features/ElementsForm';
import { getInitialData } from './utils';

const CreateView: React.FC = () => {
  const [data, setData] = useState<TCatalogElement>();
  const { node } = useParams();

  const query = new URLSearchParams(useLocation().search);
  const type = query.get('type') || 'E';
  const isSection = type === 'S';

  const title = isSection ? `Создание нового раздела` : `Создание нового элемента`;
  const breadcrumbs: TBreadcrumbs = [
    { title: 'Справочники', url: '/catalogs/overview' },
    { title: 'Элементы', url: `/catalogs/elements/${node}/list` },
  ];

  useEffect(() => {
    (async () => {
      const { rootNode, catalog } = await getInitialData(node);
      const parentNodes = [node];

      setData({
        ...(isSection ? defaults.section : defaults.element),
        parentNodes,
        catalog,
        rootNode,
        isSection,
        type,
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [node]);

  return (
    <PageView title={title} breadcrumbs={breadcrumbs}>
      {data && <ElementsForm data={data} isNewElement={true} />}
    </PageView>
  );
};

export default CreateView;
