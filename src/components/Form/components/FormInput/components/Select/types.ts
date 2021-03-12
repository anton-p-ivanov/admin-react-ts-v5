export type TSelectValue = string | string[];

export type TSelectProps = {
  name: string;
  value?: TSelectValue;
  isDisabled?: boolean;
  isMultiple?: boolean;
  onChange?: (value: TSelectValue) => void;
  options?: TSelectOptions;
  placeholder?: string;
  size?: number;
  variant?: string;
};

export type TSelectOptions = TSelectOption[];

export type TSelectOption = {
  value: string;
  label: string;
  isDisabled?: boolean;
};
