export type TChoices = TChoice[];

export type TChoice = {
  value: string | boolean;
  label: string;
  isDisabled?: boolean;
};

export type TChoicesValue = (string | boolean)[];

export type TChoicesProps = {
  name: string;
  choices?: TChoices;
  choicesCallback?: () => Promise<TChoices>;
  value?: TChoicesValue;
  variant?: 'default' | 'inline';
  isMultiple?: boolean;
  isDisabled?: boolean;
  showToggleButton?: boolean;
  onChange?: (value: TChoicesValue) => void;
};
