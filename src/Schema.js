import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .test("no-leading-space", "Email cannot start with a space", (value) => {
      const regex = /^\s/;
      return !regex.test(value);
    })
    .required("Email required"),
  password: yup
    .string()
    .required("Password required")
    .test("no-leading-space", "Password cannot start with a space", (value) => {
      const regex = /^\s/;
      return !regex.test(value);
    })
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "Use a strong Password"
    ),
  firstName: yup.string().required("First name required"),
  lastName: yup.string().required("Last name required"),
});

export default schema;
