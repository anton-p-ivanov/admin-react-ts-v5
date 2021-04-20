import { TTrainingCourse } from 'modules/training/config/types';

const defaults: TTrainingCourse = {
  sort: 100,
  code: 'NEW_COURSE',
  description: '',
  isActive: true,
  title: 'Новый учебный курс',
  sites: [],
  roles: [],
  accounts: [],
  lessons: [],
  tests: [],
  workflow: {
    createdAt: '',
    updatedAt: '',
    status: 'D',
  },
};

export { defaults };
