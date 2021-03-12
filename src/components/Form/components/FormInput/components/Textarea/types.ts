export type TInputTextareaProps = {
  name: string;
  value?: string;
  size?: 'small' | 'medium' | 'large';
  isDisabled?: boolean;
  onChange?: (value: string) => void;
};
