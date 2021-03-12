import React from 'react';

import RequestsList from 'modules/storage/features/RequestsList';

const RequestsTab: React.FC = () => {
  return (
    <>
      <h2>Запросы на доступ</h2>
      <RequestsList />
    </>
  );
};

export default RequestsTab;
