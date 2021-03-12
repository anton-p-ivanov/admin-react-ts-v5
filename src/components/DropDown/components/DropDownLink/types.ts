import React from 'react';

export type TDropDownLinkProps = {
  route: string;
  onClickHandler?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};
