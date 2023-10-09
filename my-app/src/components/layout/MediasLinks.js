import React from "react";
import classes from  "./MediasLinks.module.css";
import { ReactComponent as IconFacebook } from "../../assets/facebook.svg";
import { ReactComponent as IconInstagram } from "../../assets/instagram.svg";
import { ReactComponent as IconYoutube } from "../../assets/youtube.svg";
const MediasLink = ({ className }) => {
  return (
    <address className={`${classes.media} ${className}`}>
      <a href="https://www.facebook.com/thaocamviensaigon.official" aria-label="facebook">
        <IconFacebook />
      </a>
      <a href="https://www.instagram.com/thaocamvien.official/" aria-label="instagram">
        <IconInstagram />
      </a>
      <a href="/" aria-label="youtube">
        <IconYoutube />
      </a>
    </address>
  );
};

export default MediasLink;
