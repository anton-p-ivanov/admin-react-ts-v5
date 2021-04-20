import React from 'react';

import StatusesList from 'modules/forms/features/StatusesList';

const StatusesTab: React.FC = () => {
  return (
    <>
      <h2>Статусы веб-формы</h2>
      <p>
        Статусы используются для реализации оповещений пользователей о том, что заполненные ими веб-формы были
        обработаны системой тем или иным способом.
      </p>
      <StatusesList />
    </>
  );
};

export default StatusesTab;
