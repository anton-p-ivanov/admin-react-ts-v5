export type TCheckboxProps = {
  name: string;
  value?: string;
  isSelected?: boolean;
  isDisabled?: boolean;
  onSelect?: (value: string) => void;
};
