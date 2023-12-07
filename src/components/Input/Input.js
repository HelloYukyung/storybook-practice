import "./Input.css";

function Input(props) {
  const { label = "", size = "medium", ...rest } = props;
  return (
    <div>
      <label>{label}</label>
      <input className={`input ${size}`} {...rest} />
    </div>
  );
}

export default Input;
