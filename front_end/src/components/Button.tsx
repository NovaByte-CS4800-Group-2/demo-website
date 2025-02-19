import { ReactNode } from "react";
import "./Button.css";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void; // Accept an optional click handler
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button type="button" className="btn" data-bs-toggle="button">
      {children}
    </button>
  );
};

export default Button;
