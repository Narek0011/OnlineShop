import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8, 'Password is too short - should be 8 chars minimum.').required("Please provide a valid password"),
}).required();

export default schema;