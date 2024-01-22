import "./Button.css";

interface ButtonProps {
  label?: string;
  icon?: string;
  action: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, icon, action }) => {
  return (
    <button onClick={action} className="button">
      {label}
      {!label && icon && <img className="button-icon" src={icon} alt="" />}
    </button>
  );
};

export default Button;
