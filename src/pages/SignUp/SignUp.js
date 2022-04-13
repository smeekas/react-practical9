import styles from "./SignUp.module.css";
import girl from "../../assets/girl.png";
import React from "react";
import Form from "../../components/Form/Form";
const SignUp = () => {
  document.title="SignUp"
  return (
    <div className={styles.signup}>
     
      <div className={styles.form}>
        <h1 className={styles.text}>SignUp</h1>
        <Form />
      </div>
      <div className={styles.image}>
        <img className={styles.img} src={girl} alt="girl" />
      </div>
    </div>
  );
};
export default React.memo(SignUp);
