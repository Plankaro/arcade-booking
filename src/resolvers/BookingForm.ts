import * as yup from 'yup';

// export const bookingFormSchema = yup.object().shape({
//   fullName: yup.string().required(),
//   email: yup.string().email().required(),
//   phone: yup.string().required(),
//   message: yup.string().notRequired(),
// });

export const bookingFormSchema = yup.object().shape({
  // type: yup.string().required(),
  // floorId: yup.string().required(),
  // roomId: yup.string().required(),
  userName: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  description: yup.string().required(),
  email: yup.string().email().required(),
});