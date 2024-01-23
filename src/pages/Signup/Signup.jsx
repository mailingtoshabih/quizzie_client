import React from 'react'
import styles from "./signup.module.css"
import { Link, useLocation } from 'react-router-dom'

export const Signup = () => {

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
            className={`
            ${pathname === "/signup"} ? 
            ${styles.button} ${styles.buttonActive}
             : ${styles.button}`}>
            SignUp
          </Link>

          <Link to="/login"
            className={styles.button}>
            Login
          </Link>
        </div>

        <div className={styles.formParent}>
          <form action="">
            <div className={styles.containers}>
              <label htmlFor="">Name</label>
              <input type="name" className={styles.input} />
            </div>
            <div className={styles.containers}>
              <label htmlFor="">Email</label>
              <input type="email" className={styles.input} />
            </div>
            <div className={styles.containers}>
              <label htmlFor="">Password</label>
              <input type="password" className={styles.input} />
            </div>
            <div className={styles.containers}>
              <label htmlFor="">Confirm Password</label>
              <input type="password" className={styles.input} />
            </div>
          </form>

          <button className={styles.loginbtn}>
            Signup
          </button>
        </div>



      </div>
    </div>
  )
}
