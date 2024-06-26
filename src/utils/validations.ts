import * as Yup from 'yup';

const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const loginUserValidationSchema = Yup.object({
  companyName: Yup.string()
    .required('Company Name is required')
    .min(3, 'Company Name must be at least 3 characters'),
  email: Yup.string()
    .required('Email Address is required')
    .matches(emailRegExp, 'The Email not valid format'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
});

const sendOTPCodeValidationSchema = Yup.object({
  email: Yup.string()
    .required('Email Address is required')
    .matches(emailRegExp, 'The Email not valid format'),
});

const otpCodeValidationSchema = Yup.object({
  code: Yup.string()
    .required('Code is required')
    .matches(/^\d{4}$/, 'Code must be exactly 4 digits'),
});

const resetPasswordValidationSchema = Yup.object({
  newPassword: Yup.string()
    .required('New Password is required')
    .min(8, 'Password must be at least 8 characters long'),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('newPassword')], 'Passwords must match'),
});

const registerValidationSchema = Yup.object({
  yourName: Yup.string()
    .required('Your Name is required')
    .min(3, 'Full Name must be at least 3 characters long'),
  emailAddress: Yup.string()
    .required('Email Address is required')
    .matches(emailRegExp, 'The Email not valid format'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  countryCode: Yup.string().required('Country Code is required').default('+20'),
});

const completeInfoValidationSchema = Yup.object({
  companyName: Yup.string().required('Company Name is required'),
  companyId: Yup.string().required('Company ID is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
  package: Yup.string().required('Package is required'),
  domain: Yup.string().required('Domain is required'),
  howDidYouHear: Yup.string().required('This field is required'),
  noOfEmployees: Yup.number()
    .required('Number of employees is required')
    .typeError('Please enter a valid number')
    .positive('Number of employees must be a positive number')
    .integer('Number of employees must be an integer'),
});

const addCustomerSchema = Yup.object().shape({
  code: Yup.string().min(4, 'Code must be at least 4 characters'),
  accountReceivableID: Yup.string()
    .required('Code is required')
    .min(4, 'Code must be at least 4 characters'),
  name: Yup.string()
    .required('Customer Name is required')
    .min(4, 'Customer Name must be at least 4 characters'),
  email: Yup.string().email('Email is invalid').required('Email is required'),
  countryCode: Yup.string().required('Country Code is required').default('+20'),
  mobile: Yup.string().required('Phone Number field is required'),
  mobileWithCode: Yup.string().required('Phone Number field is required'),
  taxNumber: Yup.string().required('Tax Number is required'),
  openingBalance: Yup.number()
    .min(0, 'Opening Balance cannot be negative')
    .default(0),
  street: Yup.string().required('Street is required'),
  country: Yup.string().required('Country is required'),
  postalCode: Yup.string()
    .required('Postal Code is required')
    .min(6, 'Postal Code must be at least 6 characters'),
});

export {
  loginUserValidationSchema,
  sendOTPCodeValidationSchema,
  registerValidationSchema,
  addCustomerSchema,
  otpCodeValidationSchema,
  resetPasswordValidationSchema,
  completeInfoValidationSchema,
};
