import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DataView from 'features/DataView';
import { TCatalog } from 'modules/catalogs/config/types';
import API from 'utils/api';

import { CatalogsSelector } from './components';
import { columns, templates } from './props';
import './styles.scss';

const CatalogsIndex: React.FC = () => {
  const [catalogs, setCatalogs] = useState<TCatalog[]>([]);
  const { uuid } = useParams();

  useEffect(() => {
    const headers = {
      'x-search-conditions': JSON.stringify({
        filter: { type: uuid },
      }),
    };

    API.request({ url: `/catalogs`, headers }).then((response) => setCatalogs(response.data));
  }, [uuid]);

  return (
    <>
      <CatalogsSelector />
      {uuid && <DataView data={catalogs} templates={templates} columns={columns} />}
    </>
  );
};

export default CatalogsIndex;
