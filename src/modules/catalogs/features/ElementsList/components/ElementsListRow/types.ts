import { TDataViewRow } from 'features/DataView/types';
import { TCatalogTree } from 'modules/catalogs/config/types';

export type TElementsListRowProps = TDataViewRow & {
  data: TCatalogTree;
};
