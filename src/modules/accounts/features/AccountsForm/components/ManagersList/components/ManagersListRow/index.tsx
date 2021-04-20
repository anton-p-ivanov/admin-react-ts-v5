import React from 'react';

import { ManagersListContext } from '../';
import { TStatusesListRowProps } from './types';

const ManagersListRow: React.FC<TStatusesListRowProps> = (props) => {
  const { data } = props;

  return (
    <>
      <td>{data.fullName}</td>
      <td>{data.position || <em>- нет данных -</em>}</td>
      <td className="data-table__cell data-table__cell--context">
        <ManagersListContext data={data} />
      </td>
    </>
  );
};

export default ManagersListRow;
