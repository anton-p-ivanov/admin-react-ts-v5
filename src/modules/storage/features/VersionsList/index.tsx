import React, { useState } from 'react';
import { useParams } from 'react-router';

import Downloader from 'features/Downloader';
import ListView from 'features/ListView';
import Uploader from 'features/Uploader';

import { columns, templates, conditions } from './props';

import './styles.scss';

const VersionsList: React.FC = () => {
  const { uuid } = useParams();
  const [timestamp, setTimestamp] = useState<number>(new Date().getTime());

  const onComplete = () => setTimestamp(new Date().getTime());

  return (
    <Downloader>
      <Uploader url={`/storage/${uuid}/versions`} onComplete={onComplete}>
        <ListView
          endpoint={`GET:/storage/${uuid}/versions?timestamp=${timestamp}`}
          templates={templates}
          columns={columns}
          conditions={conditions}
          id={`storage-versions`}
        />
      </Uploader>
    </Downloader>
  );
};

export default VersionsList;
