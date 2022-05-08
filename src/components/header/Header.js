import React from "react";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Button classes="btn btn--no-body btn--medium" />
    </header>
  );
};

export default Header;
