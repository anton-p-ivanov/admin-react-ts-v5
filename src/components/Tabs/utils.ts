import { TTabsItem } from 'components/Tabs/types';

const setDisabledState = (items: TTabsItem[], disabled: string[]): TTabsItem[] => {
  return items.map((item) => {
    return item.items
      ? { ...item, items: setDisabledState(item.items, disabled) }
      : { ...item, isDisabled: disabled.indexOf(item.id) !== -1 };
  });
};

const setInvalidState = (items: TTabsItem[], invalid: string[]): TTabsItem[] => {
  return items.map((item) => {
    return item.items
      ? { ...item, items: setInvalidState(item.items, invalid) }
      : { ...item, isValid: invalid.indexOf(item.id) === -1 };
  });
};

const getFirstTab = (items: TTabsItem[]): TTabsItem => {
  return items.map((i) => i.items || [i]).reduce((i, c) => i.concat(c))[0];
};

const Utils = {
  setDisabledState,
  setInvalidState,
  getFirstTab,
};

export default Utils;
