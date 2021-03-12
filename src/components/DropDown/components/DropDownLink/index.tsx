import React from 'react';
import { Link } from 'react-router-dom';

import { TDropDownLinkProps } from './types';

const DropDownLink: React.FC<TDropDownLinkProps> = (props) => {
  const { route, onClickHandler, children } = props;

  return (
    <Link to={route} className="dropdown__item dropdown__item--link" onClick={onClickHandler}>
      {children}
    </Link>
  );
};

export default DropDownLink;
