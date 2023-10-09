import React from "react";
import classes from "./Home.module.css";
import MediasLink from "./layout/MediasLinks";
import Logo from "./layout/Logo";
import { ReactComponent as IconPin } from "../assets/pin.svg";
import { Link } from "react-router-dom";


const Entrada = () => {
  return (
    <section className={classes.entrada}>
      <header className={classes.header}>
        <Logo className={classes.logo} />
        <MediasLink className={classes.linksMedia} />
        <Link to="/login" className="btn-verde">
          Login
        </Link>
      </header>

      <div className={classes.entradaContainer}>
        <div className={classes.titleAndTexts}>
          {/* <p className={classes.description}>
            Morbi ac ipsum elit. Cras id sem id neque blandit molestie. Nunc
            malesuada sit amet arcu id pellentesque.
          </p> */}

          <h1>Zooly: An Animal Lover's Adventure</h1>

          <a href="/" className="btn-verde">
            Buy Ticket Now
          </a>
        </div>

        <div className={classes.aside}>
          <ul>
            <li>
              <span>2000</span>
              <p>animals</p>
            </li>
            <li>
              <span>150</span>
              <p>speices</p>
            </li>
            <li>
              <span>+300</span>
              <p>staff</p>
            </li>
          </ul>

        </div>
      </div>



    </section>
  );
};

export default Entrada;
