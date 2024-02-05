import * as Yup from "yup";
export const signInValidation = Yup.object({
  email: Yup.string().email("Invalid Email Address").required("Required"),
  password: Yup.string()
    .matches(/(?=.*?[A-Z])/, "Week Password")
    .matches(/(?=.*?[a-z])/, "Week Password")
    .matches(/(?=.*?[0-9])/, "Week Password")
    .matches(/(?=.*?[#?!@$%^&*-])/, "Week Password")
    .required("Required"),
});
