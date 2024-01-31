import axios from 'axios'
import React, { useState } from 'react'
import styles from "./signup.module.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Signup = () => {

  const backendUrl = import.meta.env.VITE_BACKEND;
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const [issue, setIssue] = useState(false);

  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSignup = async () => {
    if (
      !details.username ||
      !details.password ||
      !details.confirmpassword ||
      !details.email ||
      details.password !== details.confirmpassword
    ) {
      setIssue(true);
      return;
    };

    await axios.post(`${backendUrl}auth/signup`, details)
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.user));
          navigate("/login");
        } else {
          alert(response.data.error || "Signup failed");
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
              <input onChange={handleChange} type="name" name="username" className={styles.input} />
            </div>
            <div className={styles.containers}>
              <label htmlFor="">Email</label>
              <input onChange={handleChange} type="email" name="email" className={styles.input} />
            </div>
            <div className={styles.containers}>
              <label htmlFor="">Password</label>
              <input onChange={handleChange} name="password" type="password" className={styles.input} />
            </div>
            <div className={styles.containers}>
              <label htmlFor="">Confirm Password</label>
              <input onChange={handleChange} name="confirmpassword" type="password" className={styles.input} />
            </div>
          </form>

          {
            issue &&
            <div style={{ fontSize: "12px", color: "red" }}>
              All Fields Mandatory
            </div>
          }

          <button className={styles.loginbtn} onClick={handleSignup}>
            Signup
          </button>
        </div>
      </div>
    </div>
  )
}
