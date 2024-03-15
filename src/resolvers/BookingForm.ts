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
  mobileNumber: yup.string().notRequired(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  description: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
});