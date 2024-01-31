import React, { useState, useEffect } from 'react'
import styles from "./quizpage.module.css"
import { Timer } from '../Timer/Timer';
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { setReduxAnswers } from '../../../app/quizSlice';



export const Quizpage = ({ setQuestionDetails, question, quiz, setPage, page, setAnswers, answers, submitQuiz }) => {
  
    const [selection, setSelection] = useState(10);
    const [seconds, setSeconds] = useState();
    const backendUrl = import.meta.env.VITE_BACKEND;

    const handleNext = async () => {
        if (!quiz || !question || !answers) return;
        await axios.post(`${backendUrl}quiz/saveanswer`, {
            quizid: quiz?._id,
            question: question?.question,
            answers: selection,
        })
        .then((res) => {
            console.log(" data : ", res.data);
        })
        .catch((e) => console.log(e));

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
        window.scrollTo(0, 0);
        setSeconds(question?.timer);
    }, [question?.question]);


    useEffect(() => {
        const setTime = (duration) => {
            setTimeout(() => {
                setSeconds(seconds - 1);
                if (seconds === 0) {
                    if (page + 1 === quiz?.quiz?.length) submitQuiz();
                    setSeconds(duration);
                    handleNext();
                    return;
                }
            }, 1000);
        }
        question?.timer && setTime(question.timer);
    }, [seconds, question]);



    useEffect(() => {
        setQuestionDetails({ question: question?.question, quizid: quiz?._id })
        // dispatch(setReduxAnswers(answers))
    }, [question, quiz]);


    const handleSubmit = async () => {
        handleNext();
        submitQuiz();
    }


    // const showDesktop = styles.smalltext;
    // const showMobile = styles.insideText;
    // const hide = styles.hideText;





    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <p className={styles.pagenum}>0{page + 1}/0{quiz?.quiz?.length || 0}</p>
                {
                    quiz?.type && question?.timer &&
                    <p className={styles.timer}>
                        {
                            seconds === 10 ? "00:" + seconds : "00:0" + seconds
                        }</p>
                }
            </div>

            <p className={styles.question}>
                {question?.question
                    ||
                    "Your question text comes here, its a sample text."}
            </p>




            {/* <div className={styles.optionsParent}>

                <div  onClick={() => setSelection("a")} className={styles.optionboxparent}>
                    {question?.option1text &&
                        <p className={styles.smalltext}>{question?.option1text}</p>
                    }

                    <div
                        className={selection === 'a' ? `${styles.selected}` : `${styles.optionbox}`}>
                        {
                            isURL(question?.option1) ?
                                (<img className={styles.img} src={question?.option1} alt="" />)
                                :
                                <p className={styles.p}>{question?.option1}</p>
                        }
                    </div>
                </div>


                <div className={styles.optionboxparent}>
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

                <div className={styles.optionboxparent}>
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


                <div className={styles.optionboxparent}>
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

            </div> */}










            <div className={styles.optionsParent}>
                {
                    question?.optionType === 'text' &&
                    <>
                        {
                            question?.option1 &&
                            <div onClick={() => setSelection("a")} className={selection === 'a' ? `${styles.selected}` : `${styles.optionbox}`}>
                                <p className={styles.p}>{question.option1}</p>
                            </div>
                        }
                        {
                            question?.option2 &&
                            <div onClick={() => setSelection("b")} className={selection === 'b' ? `${styles.selected}` : `${styles.optionbox}`}>
                                <p className={styles.p}>{question.option2}</p>
                            </div>
                        }
                        {
                            question?.option3 &&
                            <div onClick={() => setSelection("c")} className={selection === 'c' ? `${styles.selected}` : `${styles.optionbox}`}>
                                <p className={styles.p}>{question.option3}</p>
                            </div>
                        }
                        {
                            question?.option4 &&
                            <div onClick={() => setSelection("d")} className={selection === 'd' ? `${styles.selected}` : `${styles.optionbox}`}>
                                <p className={styles.p}>{question.option4}</p>
                            </div>
                        }
                    </>
                }


                {
                    question?.optionType === 'textimg' &&
                    <>
                        {
                            question?.option1 &&
                            <div onClick={() => setSelection("a")} className={selection === 'a' ? `${styles.selected}` : `${styles.optionbox}`}>
                                <img className={styles.img} src={question?.option1} alt="" />
                            </div>
                        }
                        {
                            question?.option2 &&
                            <div onClick={() => setSelection("b")} className={selection === 'b' ? `${styles.selected}` : `${styles.optionbox}`}>
                                <img className={styles.img} src={question?.option2} alt="" />
                            </div>
                        }
                        {
                            question?.option3 &&
                            <div onClick={() => setSelection("c")} className={selection === 'c' ? `${styles.selected}` : `${styles.optionbox}`}>
                                <img className={styles.img} src={question?.option3} alt="" />
                            </div>
                        }
                        {
                            question?.option4 &&
                            <div onClick={() => setSelection("d")} className={selection === 'd' ? `${styles.selected}` : `${styles.optionbox}`}>
                                <img className={styles.img} src={question?.option4} alt="" />
                            </div>
                        }
                    </>
                }


                {// textimg poll
                    question?.optionType === 'textimgurl' &&
                    quiz?.type === false &&
                    <>
                        {
                            question?.option1 &&
                            <div onClick={() => setSelection("a")} className={selection === 'a' ? `${styles.selected}` : `${styles.optionbox}`}>
                                <div className={styles.textimgurl}>
                                    <p className={styles.smallText}>{question?.option1text}</p>
                                    <img className={styles.imgsmall} src={question?.option1} alt="" />
                                    <p className={styles.insidetext}>{question?.option1text}</p>
                                </div>
                            </div>
                        }
                        {
                            question?.option2 &&
                            <div onClick={() => setSelection("b")} className={selection === 'b' ? `${styles.selected}` : `${styles.optionbox}`}>
                                <div className={styles.textimgurl}>
                                    <p className={styles.smallText}>{question?.option2text}</p>
                                    <img className={styles.imgsmall} src={question?.option2} alt="" />
                                    <p className={styles.insidetext}>{question?.option2text}</p>
                                </div>
                            </div>
                        }
                        {
                            question?.option3 &&
                            <div onClick={() => setSelection("c")} className={selection === 'c' ? `${styles.selected}` : `${styles.optionbox}`}>
                                <div className={styles.textimgurl}>
                                    <p className={styles.smallText}>{question?.option3text}</p>
                                    <img className={styles.imgsmall} src={question?.option3} alt="" />
                                    <p className={styles.insidetext}>{question?.option3text}</p>
                                </div>
                            </div>
                        }
                        {
                            question?.option4 &&
                            <div onClick={() => setSelection("d")} className={selection === 'd' ? `${styles.selected}` : `${styles.optionbox}`}>
                                <div className={styles.textimgurl}>
                                    <p className={styles.smallText}>{question?.option4text}</p>
                                    <img className={styles.imgsmall} src={question?.option4} alt="" />
                                    <p className={styles.insidetext}>{question?.option4text}</p>
                                </div>
                            </div>
                        }
                    </>
                }


                {// textimg qna
                    question?.optionType === 'textimgurl' &&
                    quiz?.type === true &&
                    <>
                        {
                            question?.option1 &&
                            <div onClick={() => setSelection("a")} className={selection === 'a' ? `${styles.selectedqna}` : `${styles.optionboxqna}`}>
                                <div className={styles.textimgurl}>
                                    <p className={styles.smalltextqna}>{question?.option1text}</p>
                                    <img className={styles.imgsmallqna} src={question?.option1} alt="" />
                                </div>
                            </div>
                        }
                        {
                            question?.option1 &&
                            <div onClick={() => setSelection("b")} className={selection === 'b' ? `${styles.selectedqna}` : `${styles.optionboxqna}`}>
                                <div className={styles.textimgurl}>
                                    <p className={styles.smalltextqna}>{question?.option2text}</p>
                                    <img className={styles.imgsmallqna} src={question?.option2} alt="" />
                                </div>
                            </div>
                        }
                        {
                            question?.option1 &&
                            <div onClick={() => setSelection("c")} className={selection === 'c' ? `${styles.selectedqna}` : `${styles.optionboxqna}`}>
                                <div className={styles.textimgurl}>
                                    <p className={styles.smalltextqna}>{question?.option3text}</p>
                                    <img className={styles.imgsmallqna} src={question?.option3} alt="" />
                                </div>
                            </div>
                        }
                        {
                            question?.option1 &&
                            <div onClick={() => setSelection("d")} className={selection === 'd' ? `${styles.selectedqna}` : `${styles.optionboxqna}`}>
                                <div className={styles.textimgurl}>
                                    <p className={styles.smalltextqna}>{question?.option4text}</p>
                                    <img className={styles.imgsmallqna} src={question?.option4} alt="" />
                                </div>
                            </div>
                        }
                    </>
                }
            </div>

























            {
                page + 1 < quiz?.quiz?.length ?
                    <button onClick={handleNext} className={styles.next}>
                        Next
                    </button>
                    :
                    <button onClick={handleSubmit} className={styles.next}>
                        Submit
                    </button>
            }

        </div >

    )
}
