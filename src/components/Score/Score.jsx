import React, { useEffect } from 'react'
import styles from "./score.module.css"
import { Link, useNavigate } from 'react-router-dom'
import award from "../../assets/image 2.png"
import { useSelector } from 'react-redux'
import axios from 'axios'

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
console.log(savequestion)
    const navigate = useNavigate();
    const handleClose = () => {
        navigate(-1);
    }

    const reduxAnswers = useSelector((state) => state?.finalanswer?.reduxAnswers);
    // console.log(reduxAnswers)

    // useEffect(() => {
    //     const saveAnswer = async () => {
    //         await axios.post("http://localhost:3000/quiz/saveanswer", {
    //             quizid: quizid && quizid,
    //             question: savequestion && savequestion,
    //             answers: reduxAnswers,
    //         })
    //             .then((res) => {
    //                 console.log(" data : ", res.data);
    //             })
    //             .catch((e) => console.log(e));
    //     }
    //     saveAnswer();

    // }, [reduxAnswers])




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
