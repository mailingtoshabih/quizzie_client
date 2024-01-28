import React, { useState, useEffect } from 'react'
import styles from "./quizpage.module.css"
import { Timer } from '../Timer/Timer';

const isURL = (str) => {
    // Regular expression to match a simple URL pattern
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    return urlRegex.test(str);
};



export const Quizpage = ({ question, quiz, setPage, page, setAnswers, submitQuiz }) => {

    const [selection, setSelection] = useState(10);
    const [seconds, setSeconds] = useState();



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


    const handleSubmit = () => {
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
                                    <p className={styles.smallText}>{"Sample Text"}</p>
                                    <img className={styles.imgsmall} src={question?.option1} alt="" />
                                    <p className={styles.insidetext}>{"Extra Texjt"}</p>
                                </div>
                            </div>
                        }
                        {
                            question?.option1 &&
                            <div onClick={() => setSelection("b")} className={selection === 'b' ? `${styles.selected}` : `${styles.optionbox}`}>
                                <div className={styles.textimgurl}>
                                    <p className={styles.smallText}>{"Sample Text"}</p>
                                    <img className={styles.imgsmall} src={question?.option1} alt="" />
                                    <p className={styles.insidetext}>{"Extra Text"}</p>
                                </div>
                            </div>
                        }
                        {
                            question?.option1 &&
                            <div onClick={() => setSelection("c")} className={selection === 'c' ? `${styles.selected}` : `${styles.optionbox}`}>
                                <div className={styles.textimgurl}>
                                    <p className={styles.smallText}>{"Sample Text"}</p>
                                    <img className={styles.imgsmall} src={question?.option1} alt="" />
                                    <p className={styles.insidetext}>{"Extra Text"}</p>
                                </div>
                            </div>
                        }
                        {
                            question?.option1 &&
                            <div onClick={() => setSelection("d")} className={selection === 'd' ? `${styles.selected}` : `${styles.optionbox}`}>
                                <div className={styles.textimgurl}>
                                    <p className={styles.smallText}>{"Sample Text"}</p>
                                    <img className={styles.imgsmall} src={question?.option1} alt="" />
                                    <p className={styles.insidetext}>{"Extra Text"}</p>
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
                                    <p className={styles.smalltextqna}>{"Sample Text"}</p>
                                    <img className={styles.imgsmallqna} src={question?.option1} alt="" />
                                </div>
                            </div>
                        }
                        {
                            question?.option1 &&
                            <div onClick={() => setSelection("b")} className={selection === 'b' ? `${styles.selectedqna}` : `${styles.optionboxqna}`}>
                                <div className={styles.textimgurl}>
                                    <p className={styles.smalltextqna}>{"Sample Text"}</p>
                                    <img className={styles.imgsmallqna} src={question?.option1} alt="" />
                                </div>
                            </div>
                        }
                        {
                            question?.option1 &&
                            <div onClick={() => setSelection("c")} className={selection === 'c' ? `${styles.selectedqna}` : `${styles.optionboxqna}`}>
                                <div className={styles.textimgurl}>
                                    <p className={styles.smalltextqna}>{"Sample Text"}</p>
                                    <img className={styles.imgsmallqna} src={question?.option1} alt="" />
                                </div>
                            </div>
                        }
                        {
                            question?.option1 &&
                            <div onClick={() => setSelection("d")} className={selection === 'd' ? `${styles.selectedqna}` : `${styles.optionboxqna}`}>
                                <div className={styles.textimgurl}>
                                    <p className={styles.smalltextqna}>{"Sample Text"}</p>
                                    <img className={styles.imgsmallqna} src={question?.option1} alt="" />
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
