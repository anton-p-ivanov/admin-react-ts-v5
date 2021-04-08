import { TDataViewRow } from 'features/DataView/types';
import { TCatalog } from 'modules/catalogs/config/types';

export type TCatalogsIndexRowProps = TDataViewRow & {
  data: TCatalog;
};
