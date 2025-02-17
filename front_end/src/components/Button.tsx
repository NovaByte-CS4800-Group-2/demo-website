import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button type="button" className="btn btn-outline-primary">
      {children}
    </button>
  );
};

export default Button;
