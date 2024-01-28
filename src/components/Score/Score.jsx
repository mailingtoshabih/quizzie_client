import React from 'react'
import styles from "./score.module.css"
import { Link, useNavigate } from 'react-router-dom'
import award from "../../assets/image 2.png"

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


export const Score = ({ finalAnswers, questions }) => {

    const navigate = useNavigate();
    const handleClose = () => {
        navigate(-1);
    }

 
    return (
        <div className={styles.parent}>
            <div className={styles.card}>
                <p>
                    Congrats Quiz is completed
                </p>

                <img src={award} alt="award" />

                <p className={styles.p}>
                    Your Score is &nbsp;
                    <span style={{ color: "#60B84B" }}>
                        0{finalAnswers && questions && calculateScore(finalAnswers, questions)}/0{questions?.length}
                    </span>
                </p>
            </div >
        </div >
    )
}
