import React from 'react';

import { Button, Icon } from 'components';

import { useHandlers } from '../../hooks';
import { TAnswersListRowProps } from './types';

const AnswersListRow: React.FC<TAnswersListRowProps> = ({ data }) => {
  const handlers = useHandlers(data);

  return (
    <>
      <td>{data.isValid ? 'Да' : 'Нет'}</td>
      <td>{data.answer}</td>
      <td>
        <Button isIcon={true} size={`small`} onClick={handlers.delete}>
          <Icon name={`x`} />
        </Button>
      </td>
    </>
  );
};

export default AnswersListRow;
