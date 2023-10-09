import React from "react";
import LayoutSections from "./layout/LayoutSections";
import classes from "./News.module.css";
import ImgGiraffe from "../assets/banner_1.png";

const News = () => {
  return (
    <section className={classes.section}>
      <LayoutSections
        title="News"
        className={classes.content}
      >
        <ul className={classes.valuesList}>

        </ul>

        <a href="/" className="btn-verde">
          Discover Now
        </a>
      </LayoutSections>
      <div className={classes.img}>
        <img src={ImgGiraffe} alt="girafa" />
        <div className={classes.detail1}></div>
      </div>
    </section>
  );
};

export default News;
