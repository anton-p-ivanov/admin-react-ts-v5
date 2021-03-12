import React, { useContext } from 'react';

import { Status, Icon } from 'components';
import withConfirm from 'features/withConfirm';
import Store from 'store';

import { TContentViewProps } from './types';

const ContentView: React.FC<TContentViewProps> = ({ route }) => {
  const { listView } = useContext(Store);

  return (
    <div className={`content-view`}>
      <div className={`content-view__status`}>
        <Status isActive={listView.state.status === 'FETCHING'} isAnimated={true}>
          <Icon name={`loader`} />
        </Status>
      </div>
      <route.component />
    </div>
  );
};

export default withConfirm(ContentView);
