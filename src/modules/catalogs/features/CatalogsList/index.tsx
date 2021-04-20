import React, { useEffect, useState } from 'react';

import ListView from 'features/ListView';
import API, { TLookupResult } from 'utils/api';

import Context from './context';
import * as props from './props';
import './styles.scss';

const CatalogsList: React.FC = () => {
  const [types, setTypes] = useState<TLookupResult[]>([]);

  useEffect(() => {
    API.lookup(`/catalogs/types/lookup`).then((response) => setTypes(response));
  }, []);

  return (
    <Context.Provider value={{ types }}>
      <ListView
        endpoint={`GET:/catalogs`}
        columns={props.columns}
        templates={props.templates}
        conditions={props.conditions}
        id={`catalogs`}
      />
    </Context.Provider>
  );
};

export default CatalogsList;
