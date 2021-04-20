import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import API from 'utils/api';

import { TElementsListPathProps, TElementsListPathState } from './types';
import './styles.scss';

const INITIAL_STATE = [{ uuid: '', title: 'Верхний уровень' }];

const ElementsListPath: React.FC<TElementsListPathProps> = ({ node }) => {
  const [state, setState] = useState<TElementsListPathState>(INITIAL_STATE);

  useEffect(() => {
    if (node) {
      API.request({ url: `/catalogs/${node}/path` }).then((response) => {
        const root = response.data.shift();
        setState([{ ...root, title: 'Верхний уровень' }, ...response.data]);
      });
    }

    return () => setState(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [node]);

  return (
    <ul className={`elements-path`}>
      {state.map((item) => (
        <li key={item.uuid} className={`elements-path__item`}>
          <Link to={`/catalogs/${item.uuid}/elements`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ElementsListPath;
