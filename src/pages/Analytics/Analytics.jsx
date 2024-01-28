import axios, { all } from 'axios';
import styles from "./analytics.module.css"
import React, { useEffect, useState } from 'react'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Tablerow } from '../../components/Tablerow/Tablerow';



export const Analytics = () => {

  const [allquiz, setAllQuiz] = useState([]);
  console.log(allquiz)

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    const parsedUser = user ? JSON.parse(user) : null;

    const getAllQuiz = async () => {
      if (!token) return;
      await axios.get(`http://localhost:3000/quiz/getallquiz/${parsedUser?._id}`,
        {
          headers: {
            'Authorization': token,
          }
        }
      )
        .then((res) => setAllQuiz(res?.data))
        .catch((e) => console.log(e.message))
    };
    getAllQuiz();
  }, []);


  return (
    <div className={styles.parent}>

      <Sidebar />

      <div className={styles.dashboardParent}>

        <h1>
          Quiz Analysis
        </h1>

        <div className={styles.tableParent}>
          {allquiz.length > 0 ?
            <div className={styles.tableContainer}>
              <div className={`${styles.row} ${styles.headerRow}`}>
                <div className={styles.cell}>S.No</div>
                <div className={styles.cell}>Quiz Name</div>
                <div className={styles.cell}>Created On</div>
                <div className={styles.cell}>Impression</div>
                <div className={styles.cell}></div>
                <div className={styles.cell}></div>
              </div>
              {allquiz?.map((quiz, index) => (

                <Tablerow index={index + 1} key={quiz._id} quiz={quiz} />
              ))}
            </div>
            :
            <p style={{ textAlign: "center", fontSize: "20px" }}>
              You have not Published any quiz
            </p>
          }
        </div>



      </div>

      {/* dESIGN THIS PAGE  -------------almost done*/}
      {/* THEN COMPLETE DASHBOARD */}
      {/* CORRECT THE QUIZ DATA */}
      {/* ADD AUTHENTICATION */}
    </div>
  )
}
