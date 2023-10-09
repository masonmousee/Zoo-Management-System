import React from "react";
import classes from "./EmailSection.module.css";

const EmailSection = () => {
  return (
    <section className={classes.section}>
      <h2>Enter your email to know more news about Zooly</h2>
      <form className={classes.form}>
        <label htmlFor="email">Send Email</label>
        <input
          type="email"
          placeholder="example@email.com"
          id="email"
          className={classes.email}
        />
        <button className={`btn-preto ${classes.btn}`}>Send Email</button>
      </form>
    </section>
  );
};

export default EmailSection;
