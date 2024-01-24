import React, { useState, useEffect } from 'react'
import styles from "./quizcard.module.css"

const isURL = (str) => {
    // Regular expression to match a simple URL pattern
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    return urlRegex.test(str);
};



export const Quizcard = ({ question, quiz, setPage, page, setAnswers, submitQuiz }) => {

    const [selection, setSelection] = useState(false);

    const handleNext = (e) => {
        e.preventDefault();
        setPage(page + 1);
        const userAnswer = selection;
        setAnswers(
            (prev) => ({
                ...prev,
                [question.question]: userAnswer
            })
        )
    }

    useEffect(() => {
        setSelection(false);
    }, [question?.question])

    return (

        <div className={styles.card}>
            <div className={styles.top}>
                <p>0{page && page}/0{quiz?.quiz?.length || 0}</p>
                <p className={styles.timer}>00:10s</p>
            </div>

            <p className={styles.question}>
                {question?.question
                    ||
                    "Your question text comes here, its a sample text."}
            </p>

            <div className={styles.optionsParent}>

                <div style={{ display: "flex", alignItems : "center", maxWidth:"280px" }}>
                    {question?.option1text &&
                        <p className={styles.smalltext}>{question?.option1text}</p>
                    }
                    <div onClick={() => setSelection("a")}
                        className={selection === 'a' ? `${styles.selected}` : `${styles.optionbox}`}>
                        {
                            isURL(question?.option1) ?
                                (<img className={styles.img} src={question?.option1} alt="" />)
                                :
                                question?.option1
                        }
                    </div>
                </div>




                <div onClick={() => setSelection("b")}
                    className={selection === 'b' ? `${styles.selected}` : `${styles.optionbox}`}>
                    {
                        isURL(question?.option2) ?
                            (
                                <img className={styles.img} src={question?.option2} alt="" />
                            )
                            :
                            question?.option2
                    }
                </div>

                <div onClick={() => setSelection("c")}
                    className={selection === 'c' ? `${styles.selected}` : `${styles.optionbox}`}>
                    {
                        isURL(question?.option3) ?
                            (
                                <img className={styles.img} src={question?.option3} alt="" />
                            )
                            :
                            question?.option3
                    }
                </div>

                <div onClick={() => setSelection("d")}
                    className={selection === 'd' ? `${styles.selected}` : `${styles.optionbox}`}>
                    {
                        isURL(question?.option4) ?
                            (
                                <img className={styles.img} src={question?.option4} alt="" />
                            )
                            :
                            question?.option4
                    }
                </div>
            </div>



            {page < quiz?.quiz?.length ?
                <button onClick={handleNext} className={styles.next}>
                    Next
                </button>
                :
                <button onClick={() => submitQuiz()} className={styles.next}>
                    Submit
                </button>
            }

        </div>

    )
}
