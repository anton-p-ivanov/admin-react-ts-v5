import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Utils from 'utils';
import API, { TLookupResult } from 'utils/api';

const CatalogsSelector: React.FC = () => {
  const [items, setItems] = useState<TLookupResult[]>([]);
  const { uuid } = useParams();

  useEffect(() => {
    API.lookup(`/catalogs/types/lookup`).then((response) => setItems(response));
  }, []);

  return (
    <ul className={`catalogs-selector`}>
      {items.map((item) => {
        const className = Utils.className({
          [`catalogs-selector__item`]: true,
          [`catalogs-selector__item--active`]: uuid === item.value,
        });

        return (
          <li key={item.value} className={className}>
            <Link to={`/catalogs/${item.value}/list`}>{item.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CatalogsSelector;
