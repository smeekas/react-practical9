const Button = (props) => {
  return (
    <button
      className={props.className}
      onClick={props.onClick ? props.onClick : null}
      type={props.type}
    >
      {props.children}
    </button>
  );
};
export default Button;
