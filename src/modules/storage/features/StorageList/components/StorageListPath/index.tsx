import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { TStorageListPathState, TStorageListPathProps } from './types';
import './styles.scss';

const INITIAL_STATE = [{ uuid: '', title: 'Верхний уровень' }];

const StorageListPath: React.FC<TStorageListPathProps> = ({ node }) => {
  const [state, setState] = useState<TStorageListPathState>(INITIAL_STATE);

  useEffect(() => {
    if (node) {
      fetch(`${process.env.REACT_APP_URL}/storage/${node}/path`).then((response) => {
        return response.json().then((path) => setState([...INITIAL_STATE, ...path]));
      });
    }

    return () => setState(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [node]);

  return (
    <ul className={`storage-path`}>
      {state.map((item) => (
        <li key={item.uuid} className={`storage-path__item`}>
          <Link to={item.uuid ? `/storage/${item.uuid}` : `/storage`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default StorageListPath;
