export type TAnswersFormContext = {
  state: TAnswersFormState;
  setState: (state: TAnswersFormState) => void;
};

export type TAnswersFormState = {
  [key: string]: unknown;
  answer: string;
  isValid: boolean;
};

export const INITIAL_STATE: TAnswersFormState = {
  answer: '',
  isValid: false,
};
