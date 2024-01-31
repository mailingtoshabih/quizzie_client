import React from 'react'
import styles from "./sidebar.module.css"
import { Logo } from "../../components/Logo/Logo"
import { Link } from 'react-router-dom'



export const Sidebar = () => {

  const handleLogout = () => {
    localStorage.setItem('token', false);
    window.location.reload();
  }
  return (
    <div className={styles.parent}>

      <Logo />

      <div className={styles.routeParent}>
        <div className={styles.linkParent}>
          <Link to="/dashboard" className={styles.link}>
            Dashboard
          </Link>
          <Link to="/analytics" className={styles.link}>
            Analytics
          </Link>
          <Link to="/createquiz" className={styles.link}>
            Create Quiz
          </Link>
        </div>
      </div>


      <div className={styles.logout}>

        <button className={styles.button} onClick={handleLogout}>
          LOGOUT
        </button>
      </div>

    </div>
  )
}
