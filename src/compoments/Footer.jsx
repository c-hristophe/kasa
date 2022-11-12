import React from "react";

//Style


function Footer() {
  const effectiveYear = new Date().getFullYear();

  return (
    <footer className="footer">
      
      <p className="footer__text">
        &copy;
        {effectiveYear} Kasa. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;