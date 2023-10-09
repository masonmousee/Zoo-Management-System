import React from "react";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <section className={classes.login}>
      <h2>Login</h2>

      <form className={classes.loginForm}>
        <div className={classes.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>

        <button type="submit" className="btn-verde">
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;