import React from 'react';

import { useModal } from 'features/ModalView';

import { DownloaderModal } from './components';
import Context from './context';

const Downloader: React.FC = ({ children }) => {
  const downloader = useModal();

  return (
    <Context.Provider value={downloader}>
      {children}
      <DownloaderModal />
    </Context.Provider>
  );
};

export { Context };
export default Downloader;
