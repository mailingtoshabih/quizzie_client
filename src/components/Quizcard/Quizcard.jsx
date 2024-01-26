import React, { useState, useEffect } from 'react'
import styles from "./quizcard.module.css"
import { Timer } from '../Timer/Timer';

const isURL = (str) => {
    // Regular expression to match a simple URL pattern
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    return urlRegex.test(str);
};



export const Quizcard = ({ question, quiz, setPage, page, setAnswers, submitQuiz }) => {

    // console.log(question)

    const [selection, setSelection] = useState(10);
    const [seconds, setSeconds] = useState(5);


    const handleNext = () => {
        setPage(page + 1);
        const userAnswer = selection;
        setAnswers(
            (prev) => ({
                ...prev,
                [question?.question]: userAnswer
            })
        )
    }

    useEffect(() => {
        setSelection(false);
    }, [question?.question]);


    useEffect(() => {
        const setTime = (duration) => {
            setTimeout(() => {
                setSeconds(seconds - 1);
                if (seconds === 0 ) {
                    if (page + 1 === quiz?.quiz?.length) submitQuiz(); 
                    setSeconds(duration);
                    handleNext();
                    return;
                }
            }, 1000);
        }
        question?.timer && setTime(5);
    }, [seconds]);

    const handleSubmit = () => {
        handleNext();
        submitQuiz();
    }




    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <p>0{page + 1}/0{quiz?.quiz?.length || 0}</p>
                {
                    quiz?.type &&
                    <p className={styles.timer}>00:{seconds === 10 ? seconds : "0"+seconds}</p>
                }
            </div>

            <p className={styles.question}>
                {question?.question
                    ||
                    "Your question text comes here, its a sample text."}
            </p>

            <div className={styles.optionsParent}>

                <div style={{ display: "flex", alignItems: "center", maxWidth: "280px" }}>

                    {question?.option1text &&
                        <p className={styles.smalltext}>{question?.option1text}</p>
                    }

                    <div onClick={() => setSelection("a")}
                        className={selection === 'a' ? `${styles.selected}` : `${styles.optionbox}`}>
                        {
                            isURL(question?.option1) ?
                                (<img className={styles.img} src={question?.option1} alt="" />)
                                :
                                <p className={styles.p}>{question?.option1}</p>
                        }
                    </div>
                </div>


                <div style={{ display: "flex", alignItems: "center", maxWidth: "280px" }}>
                    {question?.option2text &&
                        <p className={styles.smalltext}>{question?.option1text}</p>
                    }
                    <div onClick={() => setSelection("b")}
                        className={selection === 'b' ? `${styles.selected}` : `${styles.optionbox}`}>
                        {
                            isURL(question?.option2) ?
                                (
                                    <img className={styles.img} src={question?.option2} alt="" />
                                )
                                :
                                <p className={styles.p}>{question?.option2}</p>
                        }
                    </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", maxWidth: "280px" }}>
                    {question?.option3text &&
                        <p className={styles.smalltext}>{question?.option1text}</p>
                    }
                    <div onClick={() => setSelection("c")}
                        className={selection === 'c' ? `${styles.selected}` : `${styles.optionbox}`}>
                        {
                            isURL(question?.option3) ?
                                (
                                    <img className={styles.img} src={question?.option3} alt="" />
                                )
                                :
                                <p className={styles.p}> {question?.option3}</p>
                        }
                    </div>
                </div>


                <div style={{ display: "flex", alignItems: "center", maxWidth: "280px" }}>
                    {question?.option4text &&
                        <p className={styles.smalltext}>{question?.option1text}</p>
                    }
                    <div onClick={() => setSelection("d")}
                        className={selection === 'd' ? `${styles.selected}` : `${styles.optionbox}`}>
                        {
                            isURL(question?.option4) ?
                                (
                                    <img className={styles.img} src={question?.option4} alt="" />
                                )
                                :
                                <p className={styles.p}>{question?.option4}</p>
                        }
                    </div>
                </div>

            </div>



            {page + 1 < quiz?.quiz?.length ?
                <button onClick={handleNext} className={styles.next}>
                    Next
                </button>
                :
                <button onClick={handleSubmit} className={styles.next}>
                    Submit
                </button>
            }

        </div>

    )
}
