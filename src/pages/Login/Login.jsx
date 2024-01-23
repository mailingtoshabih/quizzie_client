import React from 'react'
import styles from "./login.module.css"
import { Link, useLocation } from 'react-router-dom'


export const Login = () => {

  const location = useLocation();
  const { pathname } = location;

  return (
    <div className={styles.parent}>



      <div className={styles.card}>
        <p className={styles.logo}>
          Quizzie
        </p>

        <div className={styles.selector}>
          <Link to="/signup"
            className={styles.button}>
            SignUp</Link>
          <Link to="/login"
            className={`
          ${pathname === "/signup"} ? 
          ${styles.button} ${styles.buttonActive}
           : ${styles.button}`}>
            Login
          </Link>
        </div>

        <div className={styles.formParent}>
          <form action="">
            <div className={styles.containers}>
              <label className={styles.label} htmlFor="">Email</label>
              <input type="email" className={styles.input} />
            </div>
            <div className={styles.containers}>
              <label className={styles.label} htmlFor="">Password</label>
              <input type="password" className={styles.input} />
            </div>
          </form>

          <button className={styles.loginbtn}>
            Log In
          </button>
        </div>



      </div>
    </div>
  )
}
