import axios from 'axios'
import styles from "./score.module.css"
import React, { useEffect } from 'react'
import award from "../../assets/image 2.png"
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const calculateScore = (finalAnswers, questions) => {
    let correctCount = 0;

    questions.forEach(question => {
        const selectedAnswer = finalAnswers[question.question];
        if (selectedAnswer === question.answer) {
            correctCount++;
        }
    });
    return correctCount;
};


export const Score = ({ savequestion, quizid, finalAnswers, questions, type }) => {

    const navigate = useNavigate();
    const handleClose = () => {
        navigate(-1);
    }

    const reduxAnswers = useSelector((state) => state?.finalanswer?.reduxAnswers);
 
    return (
        <div className={styles.parent}>
            <div className={styles.card}>
                {!type === true ?
                    <div>
                        <p style={{ textAlign: "center" }}>
                            Congrats Quiz is completed
                        </p>

                        <img className={styles.img} src={award} alt="award" />

                        <p className={styles.p}>
                            Your Score is <span style={{ color: "#60B84B" }}>
                                &nbsp;0{finalAnswers && questions && calculateScore(finalAnswers, questions)}/0{questions?.length}
                            </span>
                        </p>
                    </div>
                    :
                    <p className={styles.p}>
                        Thank you for participating <br /> in the Poll
                    </p>
                }
            </div>
        </div >
    )
}
