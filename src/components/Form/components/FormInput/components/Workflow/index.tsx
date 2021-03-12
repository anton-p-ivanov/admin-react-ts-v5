import React, { useEffect, useState } from 'react';

import Form from 'components/Form';
import { TWorkflow } from 'config/types';
import API, { TLookupResult } from 'utils/api';

import { TInputWorkflowStatusProps } from './types';

const InputWorkflow: React.FC<TInputWorkflowStatusProps> = (props) => {
  const [options, setOptions] = useState<TLookupResult[]>([]);
  const workflow = props.value as TWorkflow;

  useEffect(() => {
    API.lookup('/workflow/statuses/lookup').then((response) => setOptions(response));
  }, []);

  const attributes = {
    ...props,
    variant: 'workflow',
    options,
    isMultiple: false,
    value: workflow ? workflow.status : '',
  };

  return <Form.Input.Select {...attributes} />;
};

export default InputWorkflow;
