import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { Form } from 'components';
import API, { TLookupResult } from 'utils/api';

import { TInputNodesProps } from './types';

const InputNodes: React.FC<TInputNodesProps> = (props) => {
  const { uuid } = useParams();
  const [nodes, setNodes] = useState<TLookupResult[]>([]);

  useEffect(() => {
    API.request({ url: `/storage/tree?exclude=${uuid}` }).then((response) => setNodes(response.data));
  }, [uuid]);

  const attributes = {
    name: 'parentNode',
    isMultiple: false,
    options: nodes,
    placeholder: '- В корневой папке -',
    value: props.value,
    onChange: props.onChange,
  };

  return <Form.Input.Select {...attributes} />;
};

export default InputNodes;
