import React from "react";

interface IFooterProps {
  children?: React.ReactNode;
}

const Footer: React.FC<IFooterProps> = ({ children }) => {
  return (
    <>
      <div>Footer</div>
      {children}
    </>
  );
};
export default Footer;
