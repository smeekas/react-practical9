import styles from "./Form.module.css";
import Button from "../../components/UI/Button/Button";
import { useDispatch } from "react-redux";
import { userActionTypes } from "../../actionTypes/userActionTypes";
import { useState, useRef } from "react";
import { useFormik } from "formik";
import React from "react";

import FormValidationSchema from "./FormValidationSchema";
import InputField from "../InputField/InputField";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { addData } from "../../services/localStorage";
const Form = () => {
  const histroy = useHistory();
  const inputFileRef = useRef();
  const dispatch = useDispatch();

  const [photo, setPhoto] = useState(null);
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    pass: "",
    confirmPass: "",
    photo: "",
  };
  const onSubmit = (values) => {
    const reader = new FileReader();
    reader.readAsDataURL(inputFileRef.current.files[0]);
    reader.onloadend = () => {
      addData({
        name: values.name,
        email: values.email,
        phone: values.phone,
        password: values.pass,
        photo: reader.result,
        auth: true,
      });
    };
    dispatch({
      type: userActionTypes.ADD_USER_DATA,
      userData: {
        name: values.name,
        email: values.email,
        phone: values.phone,
        password: values.pass,
        photo: URL.createObjectURL(inputFileRef.current.files[0]),
        auth: true,
      },
    });

    histroy.push("/home");
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: FormValidationSchema,
  });
  const { touched, errors, values, handleBlur, handleChange } = formik;
  const fileInputHandler = (event) => {
    if (event.target.files[0]) {
      setPhoto(URL.createObjectURL(event.target.files[0]));
      formik.setTouched({ ...touched, photo: true });
      formik.setFieldValue("photo", event.target.files[0]);
    }
  };
  const resetErrorHandler = () => {
    setPhoto(null);
    formik.setErrors({});
    formik.resetForm({});
  };
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <section className={styles.filePicker}>
          <div className={styles.filePhoto}>
            <input
              ref={inputFileRef}
              style={{ display: "none" }}
              type="file"
              name="photo"
              accept=".jpg, .png"
              onChange={fileInputHandler}
              onBlur={handleBlur}
            />
            <Button
              type="button"
              className={styles.fileButton}
              onClick={() => inputFileRef.current.click()}
              onBlur={handleBlur}
            >
              Add profile Picture
            </Button>
            {photo ? (
              <motion.img
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
                className={styles.photo}
                src={photo}
                alt="pic"
              />
            ) : (
              <div className={styles.photoReplacement}></div>
            )}
          </div>
          {errors.photo && touched.photo && (
            <p className={styles.fileError}>{errors.photo}</p>
          )}
        </section>
        <section>
          <InputField
            labelName="name"
            labelValue="Name"
            inputType="text"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.name}
            error={{
              show: errors.name && touched.name,
              message: errors.name,
            }}
          />

          <InputField
            labelName="email"
            labelValue="Email"
            inputType="email"
            onBlur={handleBlur}
            value={values.email}
            onChange={handleChange}
            error={{
              show: errors.email && touched.email,
              message: errors.email,
            }}
          />

          <InputField
            labelName="phone"
            labelValue="PhoneNo"
            inputType="tel"
            onBlur={handleBlur}
            value={values.phone}
            onChange={handleChange}
            error={{
              show: errors.phone && touched.phone,
              message: errors.phone,
            }}
          />

          <InputField
            labelName="pass"
            labelValue="Password"
            inputType="password"
            className={styles.password}
            onBlur={handleBlur}
            value={values.pass}
            onChange={handleChange}
            error={{
              show: errors.pass && touched.pass,
              message: errors.pass,
            }}
          />

          <InputField
            labelName="confirmPass"
            labelValue="Confirm Passoword"
            inputType="password"
            onBlur={handleBlur}
            value={values.confirmPass}
            onChange={handleChange}
            error={{
              show: errors.confirmPass && touched.confirmPass,
              message: errors.confirmPass,
            }}
          />
        </section>
        <section className={styles["form-action"]}>
          <Button className={`${styles.button} ${styles.submit}`} type="submit">
            Submit
          </Button>

          <Button
            className={`${styles.button} ${styles.reset}`}
            onClick={resetErrorHandler}
            type="reset"
          >
            Reset
          </Button>
        </section>
      </form>
    </>
  );
};
export default React.memo(Form);
