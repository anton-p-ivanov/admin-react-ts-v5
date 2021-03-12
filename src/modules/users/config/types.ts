import { TWorkflow } from 'config/types';

export type TUser = {
  [key: string]: unknown;
  uuid: string;
  isActive?: boolean;
  fullName: string;
  email: string;
  firstName: string;
  lastName: string;
  secondName?: string;
  phone?: string;
  birthDate?: string;
  workflow?: TWorkflow;
};
