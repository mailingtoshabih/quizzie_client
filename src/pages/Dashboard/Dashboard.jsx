import axios, { all } from 'axios';
import styles from "./dashboard.module.css"
import React, { useState, useEffect } from 'react'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Quizbox } from '../../components/Quizbox/Quizbox'
import { TrendingBox } from '../../components/TrendingBox/TrendingBox';


function countQuestionsAndImpressions(data) {
  let totalQuestions = 0;
  let totalImpressions = 0;

  data.forEach((item) => {
    if (item.quiz && Array.isArray(item.quiz)) {
      totalQuestions += item.quiz.length;
    }
    if (item.impression && typeof item.impression === 'number') {
      totalImpressions += item.impression;
    }
  });
  return { totalQuestions, totalImpressions };
}

function formatNumber(number) {
  if (number >= 1000) {
    const formattedNumber = (number / 1000).toFixed(1);
    return `${formattedNumber}k`;
  } else {
    return `${number}`;
  }
}



export const Dashboard = () => {

  const [allquiz, setAllQuiz] = useState([]);
  const [trendingQuiz, setTrendingQuiz] = useState([]);
  // console.log(allquiz)

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    const parsedUser = user ? JSON.parse(user) : null;

    const getAllQuiz = async () => {
      if (!token) return;
      await axios.get(`http://localhost:3000/quiz/getallquiz/${parsedUser?._id}`, {
        headers: {
          'Authorization': token,
        }
      })
        .then((res) => setAllQuiz(res?.data))
        .catch((e) => console.log(e.message))
    }

    const getTrendingQuiz = async () => {
      if (!token) return;
      await axios.get(`http://localhost:3000/quiz/trending/${parsedUser?._id}`, {
        headers: {
          'Authorization': token,
        }
      })
        .then((res) => setTrendingQuiz(res?.data))
        .catch((e) => console.log(e.message))
    }

    getAllQuiz();
    getTrendingQuiz();
  }, []);


  let { totalQuestions, totalImpressions } =
    countQuestionsAndImpressions(allquiz && allquiz)


  return (
    <div className={styles.parent}>

      <Sidebar />

      <div className={styles.dashboardParent}>

        <div className={styles.boxParent}>
          <div className={styles.box}>
            <span>{allquiz?.length}</span> Quiz <br />Created
          </div>
          <div className={styles.box}>
            <span>{totalQuestions}</span> Questions <br /> Created
          </div>
          <div className={styles.box}>
            <span>{formatNumber(totalImpressions)}</span> Total <br /> Impressions
          </div>
        </div>

        <div className={styles.trendingParent}>
          <p className={styles.trendingLogo}>
            Trending Quizes
          </p>
          <div className={styles.trending}>
            {/* all trending quizes mapping here*/}
            {
              trendingQuiz?.length > 0 ?
                trendingQuiz?.map((quiz) => (
                  <TrendingBox key={quiz._id} quiz={quiz} />
                ))
                :
                <p style={{ fontSize: "18px", color: "red" }}>No quiz is trending</p>
            }
          </div>
        </div>

      </div>


    </div>
  )
}
