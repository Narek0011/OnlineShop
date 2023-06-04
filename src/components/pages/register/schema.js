import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8, 'Password is too short - should be 8 chars minimum.').required("Please provide a valid password"),
  repeatPassword:yup.string().oneOf([yup.ref('password'), null], 'Must match "password" field value'),
}).required();

export default schema;