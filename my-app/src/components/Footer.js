import React from "react";
import MediasLink from "./layout/MediasLinks";
import Logo from "./layout/Logo";
import classes from  "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <p className={classes.title}>Menu</p>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Animal</a>
            </li>
            <li>
              <a href="/">Trainer</a>
            </li>
            <li>
              <a href="/">News</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
          </ul>
        </nav>

        <address>
          <div className={classes.endereco}>
            <p className={classes.title}>Address</p>
            <span>2 Nguyen Binh Khiem</span>
            <span>Ben Nghe Town</span>
            <span>District 1</span>
            <span>Ho Chi Minh City</span>
          </div>
        </address>

        <address>
          <div>
            <p className={classes.title}>Contact Us</p>
            <span>+84 868879348</span>
            <span className={classes.email}>zoolytphcm@email.com</span>
            <MediasLink />
          </div>
        </address>

        <Logo className={classes.logo} />
      </div>
      
    </footer>
  );
};

export default Footer;
