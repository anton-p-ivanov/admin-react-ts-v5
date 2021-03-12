import React from 'react';

import Breadcrumbs from 'components/Breadcrumbs';

import { TPageViewProps } from './types';

const PageView: React.FC<TPageViewProps> = (props) => {
  const { title, breadcrumbs, children } = props;

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className={`content-view__header`}>
        <h1>{title}</h1>
      </div>
      <div className={`content-view__body`}>{children}</div>
    </>
  );
};

export default PageView;
