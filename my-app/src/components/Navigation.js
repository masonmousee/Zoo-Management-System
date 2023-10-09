import React, { useEffect, useRef, useState } from "react";
import classes from "./Navigation.module.css";
import MediasLink from "./layout/MediasLinks";
import Logo from "./layout/Logo";
import { Link } from 'react-router-dom';



const listLinks = [
  { route: "home" },
  { route: "animals" },
  { route: "trainer" },
  { route: "news" },
  { route: "about us" },
  { route: "fAQ" },
];

const Header = ({ onNavigate }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const refBtn = useRef();

  useEffect(() => {
    const checkClickTarget = (e) => {
      if (e.target !== refBtn.current && !refBtn.current.contains(e.target)) {
        setIsMenuVisible(false);
      }
    };

    window.addEventListener("click", checkClickTarget);

    return () => window.removeEventListener("click", checkClickTarget);
  }, []);

  const openMenuHandler = () => {
    setIsMenuVisible((currState) => !currState);
  };

  const handleLinkClick = () => {
    setIsMenuVisible(false);
    onNavigate();
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <Logo />
      </Link>
      <nav className={`${classes.nav} ${isMenuVisible ? classes.visible : ""}`}>
        <ul>
          {listLinks.map((link) => (
            <li key={link.route} >
              {/* <a href="/">
                <span>{link.route}</span>
                <p>{link.description}</p>
              </a> */}
              <Link to={link.route}> 
                <span>{link.route}</span>
                <p>{link.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <MediasLink />
      <button
        className={`${classes.menuBtn} ${isMenuVisible ? classes.visible : ""}`}
        ref={refBtn}
        onClick={openMenuHandler}
        aria-label="menu"
      >
        <div className={classes.btnDash}></div>
      </button>
    </header >
  );
};

export default Header;
