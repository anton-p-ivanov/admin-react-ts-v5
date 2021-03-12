import React from 'react';

import Utils from 'utils';

import * as Type from './components';
import { TDropDownProps } from './types';
import './styles.scss';

type TDropDown = React.FC<TDropDownProps> & {
  Link: typeof Type.DropDownLink;
  Button: typeof Type.DropDownButton;
  Divider: typeof Type.DropDownDivider;
};

const DropDown: TDropDown = (props) => {
  const { toggle, children } = props;
  const [ref, isVisible, setIsVisible] = Utils.useClickOutside(false);
  const className = Utils.className({
    [`dropdown__menu`]: true,
    ['dropdown__menu--right']: true,
    ['dropdown__menu--visible']: isVisible,
  });

  const toggleDropDown = () => setIsVisible(!isVisible);

  return (
    <div className="dropdown" ref={ref}>
      <button type="button" className="dropdown__toggle" onClick={toggleDropDown}>
        {toggle}
      </button>
      <div className={className}>{children}</div>
    </div>
  );
};

DropDown.Link = Type.DropDownLink;
DropDown.Button = Type.DropDownButton;
DropDown.Divider = Type.DropDownDivider;

export default DropDown;
