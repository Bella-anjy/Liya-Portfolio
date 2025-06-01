const Button = ({ type = "button", onClick, className, icon, children }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
