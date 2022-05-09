import React from "react";
import Logo from "../logo/Logo";
import SocialIcon from "./SocialIcon";
import "./Footer.css";
import facebook from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import instagram from "../../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Logo />
      <p className="footer__text">Copyright - Suite</p>
      <div className="social-icons">
        <SocialIcon
          src={facebook}
          href="https://www.facebook.com/
"
        />
        <SocialIcon
          src={twitter}
          href="https://twitter.com/
"
        />
        <SocialIcon
          src={instagram}
          href="https://www.instagram.com/
"
        />
      </div>
    </footer>
  );
};

export default Footer;
