import React from 'react';

import sprites from 'feather-icons/dist/feather-sprite.svg';

import Utils from 'utils';

import { TIconProps } from './types';
import './styles.scss';

/**
 * Icon component
 *
 * @param name - Feather icon name
 * @param title - Icon description or title
 * @param variant - Icon style
 * @constructor
 */
const Icon: React.FC<TIconProps> = ({ name, title, variant }) => {
  const className = Utils.className({
    feather: true,
    [`feather--${name}`]: true,
    [`feather--${variant}`]: !!variant,
  });

  return (
    <svg className={className}>
      {title ? <title>{title}</title> : null}
      <use href={`${sprites}#${name}`} />
    </svg>
  );
};

export default Icon;
