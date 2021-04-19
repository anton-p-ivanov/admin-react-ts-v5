import React, { useContext } from 'react';

import { Context } from 'features/FormView';

const PropertiesTab: React.FC = () => {
  const { fields } = useContext(Context);

  return (
    <>
      <h2>Свойства элемента</h2>
      <div>To be done</div>
    </>
  );
};

export default PropertiesTab;
