import './Button.css';

const Button = ({ children, variant = 'primary', onClick, href, ...props }) => {
  const className = `button button-${variant}`;

  if (href) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
