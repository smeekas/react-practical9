import * as Yup from "yup";
import {
  CONFIRM_PASSWORD,
  IMAGE_SIZE_2MB,
  PASSWORD,
  VALID_PHONE,
  REQUIRED,
} from "./FormValidationMessages";
export default Yup.object().shape({
  name: Yup.string().required("Name " + REQUIRED),
  email: Yup.string()
    .email()
    .required("Email " + REQUIRED),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, VALID_PHONE)
    .required("Phone number " + REQUIRED),
  pass: Yup.string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,10}$/, PASSWORD)
    .required("Password " + REQUIRED),
  confirmPass: Yup.string()
    .oneOf([Yup.ref("pass"), null], CONFIRM_PASSWORD)
    .required("Confirm password " + REQUIRED),
  photo: Yup.mixed()
    .required("Image " + REQUIRED)
    .test("fileSize", IMAGE_SIZE_2MB, (value) => {
      return value && value.size <= 2000000;
    }),
});
