import React from 'react';
import { Link } from 'react-router-dom';

import { TCatalogsIndexRowProps } from './types';

const CatalogsIndexRow: React.FC<TCatalogsIndexRowProps> = (props) => {
  const { data } = props;

  return (
    <>
      <td>
        <Link to={`/catalogs/${data.uuid}/elements`}>{data.title}</Link>
      </td>
      <td>{0}</td>
    </>
  );
};

export default CatalogsIndexRow;
