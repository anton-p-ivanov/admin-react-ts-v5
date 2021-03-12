import React from 'react';

import { TProgressBarProps } from './types';

import './styles.scss';

const ProgressBar: React.FC<TProgressBarProps> = (props) => {
  const { percent = 0, children } = props;

  return (
    <div className={`progress`}>
      <span className={`progress__bar`} style={{ width: percent + '%' }} />
      <span className={`progress__text`}>{children}</span>
    </div>
  );
};

export default ProgressBar;
