import React, { useState, useEffect } from 'react'
import styles from "./quiz.module.css"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Quizcard } from '../../components/Quizcard/Quizcard';
import { Score } from '../../components/Score/Score';


export const Quiz = () => {
  const params = useParams();
  const [quiz, setQuiz] = useState(false);
  const [page, setPage] = useState(0);
  quiz && console.log(quiz)

  const [answers, setAnswers] = useState({});
  const [finalAnswers, setFinalAnswers] = useState(null);

  const submitQuiz = async () => {
    setFinalAnswers(answers);
  }


  useEffect(() => {
    const getQuiz = async () => {
      await axios.get(`http://localhost:3000/quiz/attempquiz/${params.id && params.id}`)
        .then((res) => setQuiz(res.data))
        .catch((e) => console.log(e.message))
    };
    getQuiz();
  }, [params]);


  return (
    <div className={styles.parent}>

      {
        finalAnswers
          ?
          <Score />
          :
          <Quizcard
            quiz={quiz}
            question={quiz && quiz.quiz[page]}
            setAnswers={setAnswers}
            page={page}
            setPage={setPage}
            submitQuiz={submitQuiz} />
      }

    </div>
  )
}
