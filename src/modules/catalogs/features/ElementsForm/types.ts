import { TCatalogElement } from 'modules/catalogs/config/types';

export type TElementsFormProps = {
  isNewElement?: boolean;
  data?: TCatalogElement;
};

export type TElementsFormContext = {
  root: string;
};
