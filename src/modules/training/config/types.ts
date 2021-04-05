import { TWorkflow } from 'config/types';

export type TTrainingCourse = {
  uuid?: string;
  title: string;
  description: string;
  code: string;
  isActive: boolean;
  sort: number;
  sites: string[];
  roles: string[];
  accounts: string[];
  lessons: TTrainingLesson[];
  tests: TTrainingTest[];
  workflow?: TWorkflow;
};

export type TTrainingLesson = {
  uuid?: string;
  title: string;
  description: string;
  code: string;
  isActive: boolean;
  sort: number;
  questions: TTrainingQuestion[];
  workflow?: TWorkflow;
};

export type TTrainingQuestion = {
  uuid?: string;
  title: string;
  description: string;
  isActive: boolean;
  type: string;
  sort: number;
  value: number;
  answers: TTrainingAnswer[];
};

export type TTrainingAnswer = {
  uuid?: string;
  answer: string;
  isValid: boolean;
  sort: number;
};

export type TTrainingTest = {
  uuid?: string;
  title: string;
  description: string;
  isActive: boolean;
  course: string;
  questions: Record<string, string[]>;
  randomQuestions: boolean;
  randomAnswers: boolean;
  limitAttempts: number;
  limitTime: number;
  limitPercent: number;
  limitValue: number;
  limitQuestions: number;
};
