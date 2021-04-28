import React from 'react';

import dataViewReducer from 'features/DataView/request';
import formViewReducer from 'features/FormView/request';
import listViewReducer from 'features/ListView/request';
import Auth from 'layouts/auth';
import Layout from 'layouts/default';
import Store, { Types as T } from 'store';

import useToken from './hooks/useToken';

/**
 * Main Application component
 * @constructor
 */
const App: React.FC = () => {
  const { token, setToken } = useToken();

  const state: T.TReducersContext = {
    listView: listViewReducer(),
    dataView: dataViewReducer(),
    formView: formViewReducer(),
  };

  return <Store.Provider value={state}>{token ? <Layout /> : <Auth setToken={setToken} />}</Store.Provider>;
};

export default App;
