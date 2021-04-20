import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { Form } from 'components';
import API from 'utils/api';

import { TInputNodesProps, TInputNodesState } from './types';

const InputNodes: React.FC<TInputNodesProps> = (props) => {
  const { value, onChange, root, isMultiple = false } = props;
  const { uuid } = useParams();
  const INITIAL_STATE: TInputNodesState = [
    {
      value: root,
      label: 'В корневом разделе',
      level: 0,
    },
  ];

  const [nodes, setNodes] = useState<TInputNodesState>(INITIAL_STATE);

  useEffect(() => {
    API.request({ url: `/catalogs/${root}/tree?exclude=${uuid}` }).then((response) => {
      setNodes(
        [...INITIAL_STATE, ...response.data].map((node) => {
          return { ...node, label: '--- '.repeat(node.level) + node.label };
        }),
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [root, uuid]);

  const attributes = {
    name: 'parentNodes',
    isMultiple: isMultiple,
    size: isMultiple ? 10 : `auto`,
    options: nodes,
    value,
    onChange,
  };

  return <Form.Input.Select {...attributes} />;
};

export default InputNodes;
