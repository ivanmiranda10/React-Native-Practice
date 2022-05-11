import { object, string } from "yup";

const loginValidationSchema = object({
  email: string()
    .email("Type a valid E-mail format")
    .required("E-mail is Required"),
  password: string()
    .required("Password Required")
    .min(5, "Password to Short")
    .max(20, "Password to Long"),
});

export default loginValidationSchema;
