import React from 'react';

import { Icon, DateFormat } from 'components';

import RequestsListContext from '../RequestsListContext';
import { TRequestsListRowProps } from './types';

const RequestsListRow: React.FC<TRequestsListRowProps> = (props) => {
  const { data } = props;

  if (typeof data.user === 'undefined') {
    return null;
  }

  return (
    <>
      <td>
        {data.status === 0 && <Icon name={`clock`} variant={`warning`} />}
        {data.status === 1 && <Icon name={`check`} variant={`success`} />}
        {data.status === 2 && <Icon name={`x`} variant={`danger`} />}
      </td>
      <td>{data.user.fullName}</td>
      <td>{data.issueDate ? <DateFormat value={data.issueDate} /> : <em>&mdash;</em>}</td>
      <td>{data.validDate ? <DateFormat value={data.validDate} /> : <em>&mdash;</em>}</td>
      <td className="data-table__cell data-table__cell--context">
        <RequestsListContext data={data} />
      </td>
    </>
  );
};

export default RequestsListRow;
