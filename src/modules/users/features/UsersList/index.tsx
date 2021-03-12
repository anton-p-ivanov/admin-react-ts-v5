import React from 'react';

import ListView from 'features/ListView';

import * as props from './props';

const UsersList: React.FC = () => {
  return (
    <ListView
      endpoint={`GET:/users`}
      columns={props.columns}
      templates={props.templates}
      conditions={props.conditions}
      id={props.id}
    />
  );
};

export default UsersList;
