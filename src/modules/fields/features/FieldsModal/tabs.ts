import { TTabs } from 'components/Tabs/types';

import * as Views from './components';

const Tabs: TTabs = [
  {
    id: 'field-basic',
    label: 'Основные параметры',
    component: Views.BasicTab,
  },
  {
    id: 'field-description',
    label: 'Описание поля',
    component: Views.DescriptionTab,
  },
  {
    id: 'field-validation',
    label: 'Правила валидации',
    component: Views.ValidatorsTab,
  },
  {
    id: 'field-values',
    label: 'Значения списка',
    component: Views.ValuesTab,
    isDisabled: true,
  },
  {
    id: 'field-extra',
    label: 'Дополнительно',
    component: Views.ExtraTab,
  },
];

export default Tabs;
