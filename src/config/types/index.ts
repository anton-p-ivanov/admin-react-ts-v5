import React from 'react';

export type TAuthToken = {
  token: string;
};

export type TRoute = {
  id: string;
  path: string;
  title: string;
  component: React.FC;
  sidebar?: React.FC;
};

export type TRouteParams = {
  uuid: string;
};

export type TWorkflow = {
  createdAt: string;
  updatedAt: string;
  status: string;
};

export type TWorkflowEntity = {
  [key: string]: unknown;
  uuid: string;
  workflow?: TWorkflow;
};

export type TSite = {
  [key: string]: unknown;
  uuid: string;
  title: string;
};

export type TModel = {
  [key: string]: unknown;
};

export type TMailTemplate = {
  [key: string]: unknown;
  uuid?: string;
  subject: string;
  text: string;
  html: string;
  recipient: string;
  sender: string;
  replyTo?: string;
  copyTo?: string;
};
