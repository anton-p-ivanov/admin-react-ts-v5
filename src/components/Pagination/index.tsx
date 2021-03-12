import React, { useContext } from 'react';

import { Button, Icon } from 'components/index';
import Store from 'store';

import { TPaginationProps } from './types';

import './styles.scss';

const Pagination: React.FC<TPaginationProps> = (props) => {
  const { page = 1, pages } = props;
  const { listView } = useContext(Store);

  const navigate = (page: number) => {
    const pagination = { ...listView.state.pagination, page };
    listView.update({ ...listView.state, pagination });
  };

  return (
    <div className={`pagination`}>
      <div className={`pagination__item pagination__item--first`}>
        <Button isIcon={true} size={`small`} isDisabled={page === 1} onClick={() => navigate(1)}>
          <Icon name={`chevrons-left`} />
        </Button>
      </div>
      <div className={`pagination__item pagination__item--previous`}>
        <Button isIcon={true} size={`small`} isDisabled={page === 1} onClick={() => navigate(page - 1)}>
          <Icon name={`chevron-left`} />
        </Button>
      </div>
      <div className={`pagination__item pagination__item--text`}>
        Страница {page} из {pages}
      </div>
      <div className={`pagination__item pagination__item--next`}>
        <Button isIcon={true} size={`small`} isDisabled={page === pages} onClick={() => navigate(page + 1)}>
          <Icon name={`chevron-right`} />
        </Button>
      </div>
      <div className={`pagination__item pagination__item--last`}>
        <Button isIcon={true} size={`small`} isDisabled={page === pages} onClick={() => navigate(pages)}>
          <Icon name={`chevrons-right`} />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
