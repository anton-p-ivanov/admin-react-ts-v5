import React, { useRef } from 'react';

import { useModal } from 'features/ModalView';

import { UploaderModal } from './components';
import Context from './context';
import { TUploaderProps } from './types';

const Uploader: React.FC<TUploaderProps> = (props) => {
  const { url, isMultiple = false, onComplete, children } = props;
  const ref = useRef<HTMLInputElement>(null);
  const uploader = useModal();

  const select = () => ref.current && ref.current.click();

  return (
    <Context.Provider value={{ ...uploader, select, onComplete }}>
      {children}
      <UploaderModal url={url} isMultiple={isMultiple} ref={ref} />
    </Context.Provider>
  );
};

export { Context };
export default Uploader;
