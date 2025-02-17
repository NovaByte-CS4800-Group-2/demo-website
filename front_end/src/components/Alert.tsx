// rafce

import { ReactNode } from "react"; // pass HTML content to our lert component

interface Props {
  children: ReactNode; // children is a special prop in React, it is used to pass data from parent to child component
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
