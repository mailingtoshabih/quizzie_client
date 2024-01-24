import React, { useState } from 'react'
import styles from "./login.module.css"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'


export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

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
    if (!details.password || !details.email) return;

    await axios.post("http://localhost:3000/auth/login", details)
      .then((res) => {
        // console.log(res.data);
        if (res.data) navigate("/dashboard");
      })
      .catch((e) => console.log(e.message));
    // console.log(details);
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

          <button onClick={handleLogin} className={styles.loginbtn}>
            Log In
          </button>
        </div>



      </div>
    </div>
  )
}
