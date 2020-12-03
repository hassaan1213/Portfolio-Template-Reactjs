import React from "react";
// import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer classNameName="w-100 text-light text-center">
        <p>© {year} Hassaan's IT. All Rights Reserved | Terms and Conditions</p>
      </footer>
    </>
  );
};

export default Footer;
