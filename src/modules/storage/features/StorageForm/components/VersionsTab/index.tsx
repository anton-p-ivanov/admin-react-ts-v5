import React from 'react';

import VersionsList from 'modules/storage/features/VersionsList';

const VersionsTab: React.FC = () => {
  return (
    <>
      <h2>Версии файла</h2>
      <VersionsList />
    </>
  );
};

export default VersionsTab;
