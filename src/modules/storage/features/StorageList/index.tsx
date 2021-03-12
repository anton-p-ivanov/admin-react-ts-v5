import React, { useState } from 'react';
import { useParams } from 'react-router';

import Downloader from 'features/Downloader';
import ListView from 'features/ListView';
import Uploader from 'features/Uploader';

import * as props from './props';

import './styles.scss';

const StorageList: React.FC = () => {
  const { node } = useParams();
  const [timestamp, setTimestamp] = useState<number>(new Date().getTime());

  const onComplete = () => setTimestamp(new Date().getTime());

  const endpoint = node ? `GET:/storage/${node}/nodes` : `GET:/storage/nodes`;
  const uploaderUrl = node ? `/storage/${node}/upload` : `/storage/upload`;

  return (
    <Downloader>
      <Uploader isMultiple={true} url={uploaderUrl} onComplete={onComplete}>
        <ListView endpoint={`${endpoint}?timestamp=${timestamp}`} {...props} />
      </Uploader>
    </Downloader>
  );
};

export default StorageList;
