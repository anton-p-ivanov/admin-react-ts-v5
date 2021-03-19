import React from 'react';

import ListView from 'features/ListView';

import { columns, conditions, templates } from './props';

const AccountsList: React.FC = () => {
  return (
    <ListView
      endpoint={`GET:/accounts`}
      columns={columns}
      templates={templates}
      conditions={conditions}
      id={`accounts`}
    />
  );
};

export default AccountsList;
