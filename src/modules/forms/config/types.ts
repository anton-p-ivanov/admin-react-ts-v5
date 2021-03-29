import { TWorkflow } from 'config/types';
import { TField } from 'modules/fields/config/types';

export type TForm = {
  uuid?: string;
  code: string;
  title: string;
  description: string;
  template: string;
  isTemplateActive: boolean;
  isActive: boolean;
  validFrom: string;
  validTo: string;
  sort: number;
  fields: TField[];
  statuses: TFormStatus[];
  workflow?: TWorkflow;
};

export type TFormStatus = {
  uuid?: string;
  title: string;
  description: string;
  isActive: boolean;
  isDefault: boolean;
  sort: number;
};
