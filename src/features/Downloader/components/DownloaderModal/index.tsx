import React, { useContext } from 'react';

import { Button, ProgressBar } from 'components';
import { TDownloaderData } from 'features/Downloader/types';
import ModalView from 'features/ModalView';

import Context from '../../context';
import { useHandlers } from '../../hooks';

import './styles.scss';

const DownloaderModal: React.FC = () => {
  const { dismiss } = useHandlers();
  const { state } = useContext(Context);
  const data = state.data as TDownloaderData;

  return (
    <ModalView name={`downloader`} isVisible={state.isVisible} variant={`info`}>
      <div className="modal__body">
        {data.isCompleted && <>Файл успешно скачан</>}
        {!data.isCompleted && (
          <div className={`details`}>
            <div className={`details__title`}>Идёт скачивание файла</div>
            <div className={`details__filename`}>{data.filename}</div>
            <div className={`details__percent`}>
              <ProgressBar percent={data.completed}>Скачано {data.completed}%</ProgressBar>
            </div>
          </div>
        )}
      </div>
      <div className="modal__footer">
        <Button onClick={dismiss} isDisabled={!data.isCompleted}>
          Закрыть
        </Button>
      </div>
    </ModalView>
  );
};

export default DownloaderModal;
