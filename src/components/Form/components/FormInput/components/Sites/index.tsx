import React, { useEffect, useState } from 'react';

import Form from 'components/Form';
import API, { TLookupResult } from 'utils/api';

import { TSitesProps } from './types';

const Sites: React.FC<TSitesProps> = (props) => {
  const { displayType = 'choices', ...inputProps } = props;
  const [choices, setChoices] = useState<TLookupResult[]>([]);

  useEffect(() => {
    API.lookup('/sites/lookup').then((response) => setChoices(response));
  }, []);

  return (
    <div>
      {displayType === 'choices' ? (
        <Form.Input.Choices {...inputProps} choices={choices} isMultiple={true} />
      ) : (
        <Form.Input.Select {...inputProps} options={choices} isMultiple={true} size={5} />
      )}
    </div>
  );
};

export default Sites;
