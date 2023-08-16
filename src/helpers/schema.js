import * as yup from 'yup';

export const schema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  category: yup.string().required().notOneOf(['Select category']),
  priority: yup.string().required().notOneOf(['Select priority']),
  date: yup.date().required(),
  time: yup.string(),
  location: yup.string().required(),
});
