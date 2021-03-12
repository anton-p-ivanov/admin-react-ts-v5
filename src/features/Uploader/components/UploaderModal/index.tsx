import React, { useContext } from 'react';

import { Button, ProgressBar } from 'components';
import ModalView from 'features/ModalView';

import Context from '../../context';
import { useHandlers } from '../../hooks';
import { TUploaderData, TUploaderModalProps } from '../../types';

import './styles.scss';

const UploaderModal = React.forwardRef<HTMLInputElement, TUploaderModalProps>((props, ref) => {
  const { url, isMultiple = false, children } = props;
  const handlers = useHandlers(url);
  const { state } = useContext(Context);
  const data = state.data as TUploaderData;

  return (
    <>
      {children}
      <ModalView name={`uploader`} isVisible={state.isVisible} variant={`info`}>
        <div className="modal__body">
          {data.isCompleted && <>Все файлы успешно загружены на сервер</>}
          {!data.isCompleted && (
            <div className={`details`}>
              <div className={`details__title`}>Идёт загрузка {data.files && data.files.length} файла(ов)</div>
              <div className={`details__percent`}>
                <ProgressBar percent={data.progress}>Загружено {data.progress}%</ProgressBar>
              </div>
            </div>
          )}
        </div>
        <div className="modal__footer">
          <Button onClick={handlers.dismiss} isDisabled={false}>
            Закрыть
          </Button>
        </div>
      </ModalView>
      <input type="file" name="file" multiple={isMultiple} ref={ref} onChange={handlers.change} />
    </>
  );
});

export default UploaderModal;
