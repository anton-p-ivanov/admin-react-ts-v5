import React from 'react';
import { useParams } from 'react-router';

import ListView from 'features/ListView';

import { columns, templates, conditions } from './props';

import './styles.scss';

const RequestsList: React.FC = () => {
  const { uuid } = useParams();

  return (
    <ListView
      endpoint={`GET:/storage/${uuid}/requests`}
      templates={templates}
      columns={columns}
      conditions={conditions}
      id={`storage-requests`}
    />
  );
};

export default RequestsList;
