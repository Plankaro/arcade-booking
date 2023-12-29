import * as yup from 'yup';

export const bookingFormSchema = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  message: yup.string().notRequired(),
});