import { TWorkflow } from 'config/types';

export type TField = {
  uuid?: string;
  label: string;
  description: string;
  code: string;
  type: string;
  isActive: boolean;
  isMultiple: boolean;
  default: string;
  options: string;
  sort: number;
  values: TFieldValue[];
  validators: TFieldValidator[];
  workflow?: TWorkflow;
};

export type TFieldValue = {
  label: string;
  value: string;
  sort: number;
};

export type TFieldValidator = {
  type: string;
  options: string;
  sort: number;
};
