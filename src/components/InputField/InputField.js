import styles from "./InputField.module.css";
const InputField = ({
  labelName,
  labelValue,
  inputType,
  onBlur,
  onChange,
  value,
  error,
  className,
}) => {
  return (
    <div
      className={`${styles["form-control"]} ${error.show ? styles.error : ""} ${
        className ? className : ""
      }`}
    >
      <label htmlFor={labelName}>{labelValue}</label>
      <input
        type={inputType}
        name={labelName}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
      />
      {error.show && <p>{error.message}</p>}
    </div>
  );
};
export default InputField;
