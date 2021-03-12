import React from 'react';

import { Button, Icon } from 'components';
import Utils from 'utils';

import { TDataFilterProps } from './types';
import './styles.scss';

const DataFilter: React.FC<TDataFilterProps> = (props) => {
  const { title = 'Параметры фильтрации', isActive, children } = props;
  const [ref, isVisible, setIsVisible] = Utils.useClickOutside(false);
  const className = Utils.className({
    'data-toolbar__filter': true,
    'data-toolbar__filter--visible': isVisible,
  });

  const toggleFilter = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div ref={ref}>
      <div className="toolbar__item">
        <Button isIcon={true} onClick={toggleFilter} variant={isActive ? 'success' : 'default'}>
          <Icon name="filter" title="Выбрать условия фильтрации" />
        </Button>
      </div>
      <div className={className}>
        <div className="data-filter">
          <div className="data-filter__header">{title}</div>
          <div className="data-filter__body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DataFilter;
