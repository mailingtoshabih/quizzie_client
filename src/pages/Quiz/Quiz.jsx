import axios from 'axios';
import styles from "./quiz.module.css"
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import { Score } from '../../components/Score/Score';
import { Quizpage } from '../../components/Quizpage/Quizpage';

import { useDispatch, useSelector } from 'react-redux';
import { setReduxAnswers } from '../../../app/quizSlice';

export const Quiz = () => {
  const backendUrl = import.meta.env.VITE_BACKEND;
  const dispatch = useDispatch();
  const params = useParams();
  const [quiz, setQuiz] = useState(false);
  const [page, setPage] = useState(0);
  // quiz && console.log(quiz)

  const [answers, setAnswers] = useState({});
  const [finalAnswers, setFinalAnswers] = useState(null);

  const [questionDetails, setQuestionDetails] = useState();
  // console.log("qd", questionDetails);

  const submitQuiz = () => {
    setFinalAnswers(answers);
  }

  useEffect(() => {
    dispatch(setReduxAnswers(answers))
  }, [answers]);
  const reduxAnswers = useSelector((state) => state?.finalanswer?.reduxAnswers);




  useEffect(() => {
    const token = localStorage.getItem('token');
    const getQuiz = async () => {
      if (!token) return;
      await axios.get(`${backendUrl}quiz/attempquiz/${params.id && params.id}`)
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
          <Score
            savequestion={questionDetails?.question}
            quizid={questionDetails?.quizid}
            type={quiz?.type}
            questions={quiz?.quiz}
            finalAnswers={answers} />
          :
          <Quizpage
            quiz={quiz}
            question={quiz && quiz.quiz[page]}
            answers={reduxAnswers}
            setAnswers={setAnswers}
            page={page}
            setPage={setPage}
            submitQuiz={submitQuiz}
            setQuestionDetails={setQuestionDetails} />
      }

    </div>
  )
}
