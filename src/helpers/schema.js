import * as yup from 'yup';

export const schema = yup.object().shape({
  title: yup.string().matches(/^[a-zA-Z\s]+$/),
  location: yup.string().matches(/^[a-zA-Z\s]+$/),
});
