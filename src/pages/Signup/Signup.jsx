import React, { useState } from 'react'
import styles from "./signup.module.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'

export const Signup = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

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
    if (!details.username || !details.password || !details.confirmpassword || !details.email ||
      details.password !== details.confirmpassword
    ) return;

    await axios.post("http://localhost:3000/auth/signup", details)
      .then((res) => {
        console.log(res.data);
        if (res.data === true) navigate("/login");
        else console.log(res.data);
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

          <button className={styles.loginbtn} onClick={handleSignup}>
            Signup
          </button>
        </div>



      </div>
    </div>
  )
}
