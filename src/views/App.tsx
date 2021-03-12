import React from 'react';

import dataViewReducer from 'features/DataView/request';
import formViewReducer from 'features/FormView/request';
import listViewReducer from 'features/ListView/request';
import Layout from 'layouts/default';
import Store, { Types as T } from 'store';

/**
 * Main Application component
 * @constructor
 */
const App: React.FC = () => {
  const state: T.TReducersContext = {
    listView: listViewReducer(),
    dataView: dataViewReducer(),
    formView: formViewReducer(),
  };

  return (
    <Store.Provider value={state}>
      <Layout />
    </Store.Provider>
  );
};

export default App;
