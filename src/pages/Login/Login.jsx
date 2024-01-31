import axios from 'axios'
import React, { useState } from 'react'
import styles from "./login.module.css"
import { Link, useLocation, useNavigate } from 'react-router-dom'


export const Login = () => {
  const backendUrl = import.meta.env.VITE_BACKEND;
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const [issue, setIssue] = useState(false);

  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleLogin = async () => {
    if (!details.password || !details.email) {
      setIssue(true);
      return;
    };

    await axios.post(`${backendUrl}auth/login`, details)
      .then((response) => {
        // console.log(res.data);
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.user));
          setIssue(false);
          window.location.reload();
        } else {
          alert(response.data.error || "Login failed");
        }
      })
      .catch((e) => alert(e.message));
  }



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
              <input name="email" type="email" onChange={handleChange} className={styles.input} />
            </div>
            <div className={styles.containers}>
              <label className={styles.label} htmlFor="">Password</label>
              <input name="password" type="password" onChange={handleChange} className={styles.input} />
            </div>
          </form>

          {
            issue &&
            <div style={{ fontSize: "12px", color: "red" }}>
              All Fields Mandatory
            </div>
          }

          <button onClick={handleLogin} className={styles.loginbtn}>
            Log In
          </button>
        </div>



      </div>
    </div>
  )
}
