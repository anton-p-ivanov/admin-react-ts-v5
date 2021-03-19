import { TFormField, TFormFields } from 'components/Form/types';
import API, { TLookupResult } from 'utils/api';

const status: TFormField<string> = {
  name: 'status',
  label: 'Статус',
  isRequired: true,
  type: 'select',
  attrs: {
    input: {
      placeholder: '- Выберите статус -',
      optionsCallback: (): Promise<TLookupResult[]> => {
        return API.lookup(`/partnership/statuses/lookup`);
      },
    },
  },
};

const expiredAt: TFormField<string> = {
  name: 'expiredAt',
  label: 'Срок действия',
  type: 'date',
};

const fields: TFormFields = {
  status,
  expiredAt,
};

export default fields;
