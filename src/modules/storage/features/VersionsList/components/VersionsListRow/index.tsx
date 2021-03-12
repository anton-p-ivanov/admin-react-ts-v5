import React from 'react';

import { DateFormat, NumberFormat } from 'components';
import { TWorkflow } from 'config/types';

import VersionsListContext from '../VersionsListContext';
import { TVersionsListRowProps } from './types';

const VersionsListRow: React.FC<TVersionsListRowProps> = (props) => {
  const { data } = props;
  const workflow = data.workflow as TWorkflow;

  if (typeof data.size === 'undefined') {
    return null;
  }

  return (
    <>
      <td>{data.name}</td>
      <td>
        <NumberFormat value={data.size} format={`filesize`} />
      </td>
      <td>{workflow ? <DateFormat value={workflow.createdAt} /> : <em>нет данных</em>}</td>
      <td className="data-table__cell data-table__cell--context">
        <VersionsListContext data={data} />
      </td>
    </>
  );
};

export default VersionsListRow;
