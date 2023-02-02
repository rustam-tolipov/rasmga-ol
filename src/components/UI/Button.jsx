import './Button.scss';

const Button = ({ children, className, ...otherProps }) => {
  const classes = 'button ' + className;

  return (
    <button className={classes} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
