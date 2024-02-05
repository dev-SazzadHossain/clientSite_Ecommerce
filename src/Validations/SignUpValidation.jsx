import * as Yup from "yup";
export const signUpValidation = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 Characters Or Less")
    .required("Required"),
  lastName: Yup.string()
    .max(15, "Must be 15 Characters Or Less")
    .required("Required"),
  email: Yup.string().email("Invalid Email Address").required("Required"),
  telephone: Yup.string()
    .required("telephone number is required")
    .matches(/^\+?[0-9]\d{1,20}$/, "Invalid telephone number"),
  address1: Yup.string().required("Required"),
  address2: Yup.string().required("Required"),
  postcode: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  division: Yup.string().required("Required"),
  district: Yup.string().required("Required"),
  password: Yup.string()
    .matches(/(?=.*?[A-Z])/, "At least one upper case")
    .matches(/(?=.*?[a-z])/, "At least one lower case")
    .matches(/(?=.*?[0-9])/, "At least one digit,")
    .matches(/(?=.*?[#?!@$%^&*-])/, "At least one special character")
    .required("Required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("repeatPassword  is required"),
});
