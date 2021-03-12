import React, { useState } from 'react';

import { Button, Icon, Form } from 'components';
import { TFormField } from 'components/Form/types';

import { TDataSearchProps } from './types';

const DataSearch: React.FC<TDataSearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handlers = {
    submit: (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSearch(searchTerm);
    },
    reset: () => {
      setSearchTerm('');
      onSearch('');
    },
    change: (value: string) => {
      setSearchTerm(value.toString());
    },
  };

  const field: TFormField<string> = {
    name: 'search',
    label: 'Поиск',
    value: searchTerm,
    onChange: handlers.change,
    attrs: {
      input: {
        placeholder: 'Поиск ...',
      },
    },
  };

  return (
    <Form onSubmit={handlers.submit}>
      <div className="data-toolbar__group">
        <div className="data-toolbar__item">
          <Form.Input field={field} />
        </div>
        <div className="data-toolbar__item">
          <Button isIcon={true} onClick={handlers.reset} isDisabled={!searchTerm}>
            <Icon name="x" title="Сбросить условия поиска" />
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default DataSearch;
