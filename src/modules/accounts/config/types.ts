import { TWorkflow } from 'config/types';

export type TAccount = {
  isActive?: boolean;
  uuid?: string;
  title: string;
  email: string;
  web: string;
  sort?: number;
  addresses: TAddress[];
  contacts: TAccountContact[];
  statuses: TAccountStatus[];
  managers: string[];
  workflow?: TWorkflow;
};

export type TAccountManager = {
  [key: string]: unknown;
  uuid: string;
  fullName: string;
  position?: string;
};

export type TAccountStatus = {
  status: string;
  expiredAt: string | null;
};

export type TAccountContact = {
  [key: string]: unknown;
  uuid: string;
  user: string;
  fullName: string;
  position: string;
  email: string;
  sort: number;
};

export type TAddress = {
  [key: string]: unknown;
  uuid: string;
  type: 'D' | 'L' | 'P';
  country: string;
  region: string;
  city: string;
  zip: string;
  street: string;
};
