import React from 'react';

import Form from 'components/Form';

import { THeaderSelectorProps } from '../types';

const HeaderSelector: React.FC<THeaderSelectorProps> = ({ column }) => {
  return <Form.Input.Checkbox name="selector" value="all" isSelected={column.isSelected} onSelect={column.onSelect} />;
};

export default HeaderSelector;
