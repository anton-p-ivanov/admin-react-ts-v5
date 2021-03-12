import React from 'react';

type TButtonVariant = 'default' | 'primary' | 'success';
type TButtonType = 'button' | 'submit';
type TButtonSize = 'normal' | 'small' | 'large';

export type TButtonProps = {
  type?: TButtonType;
  variant?: TButtonVariant;
  size?: TButtonSize;
  isDisabled?: boolean;
  isIcon?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
