import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer>Copyright &copy; {currentYear} HyeSoo</footer>;
};

export default Footer;
