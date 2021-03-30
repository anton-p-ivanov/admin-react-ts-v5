import React from 'react';

export type TTabs = TTabsItem[];

export type TTabsItem = {
  id: string;
  label: string;
  items?: TTabsItem[];
  component?: React.FC;
  isDisabled?: boolean;
  isValid?: boolean;
};

export type TTabsProps = {
  items: TTabs;
  disabled?: string[];
  invalid?: string[];
  variant?: 'default' | 'horizontal';
};

export type TTabsContext = {
  state: TTabsState;
  setState: (state: TTabsState) => void;
};

export type TTabsState = {
  activeTab: TTabsItem | null;
};
