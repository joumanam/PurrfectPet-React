const Button = (props) => {
  return (
    <button 
    style={{ backgroundColor: props.color, padding: props.padding, margin: props.margin}} 
    onClick={props.onClick}
    className="btn">
      {props.text}
    </button>
  );
};

export default Button;
