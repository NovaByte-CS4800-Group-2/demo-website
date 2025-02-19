import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void; // Accept an optional click handler
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button type="button" className="btn btn-outline-primary" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
