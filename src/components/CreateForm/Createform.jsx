import React, { useState } from 'react'
import styles from "./createform.module.css"
import { useNavigate } from 'react-router-dom'
export const Createform = ({ setInitialform }) => {

    const navigate = useNavigate();
    const [quizTitle, setQuizTitle] = useState("");
    const [radio, setRadio] = useState(false);  //true-qna, false-poll
    const [issue, setIssue] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        if (!quizTitle) {
            setIssue(true);
            return;
        };
        const user = localStorage.getItem('user');
        const parsedUser = user ? JSON.parse(user) : null;
        setInitialform({ title: quizTitle, type: radio, userId: parsedUser?._id })
    }


    return (
        <div className={styles.card}>

            <div className={styles.container3}>

                <input type="text" placeholder='Quiz Name'
                    onChange={(e) => setQuizTitle(e.target.value)}
                    className={styles.input} />

                <div className={styles.radioParent}>

                    <p className={styles.quiztype}>
                        Quiz Type
                    </p>

                    <button onClick={() => setRadio(true)}
                        className={radio ? `${styles.radio} ${styles.radioActive}` : `${styles.radio}`}>
                        Q & A</button>

                    <button onClick={() => setRadio(false)}
                        className={!radio ? `${styles.radio} ${styles.radioActive}` : `${styles.radio}`}>
                        Poll</button>

                </div>

                {
                    issue &&
                    <div style={{ fontSize: "12px", color: "red" }}>
                        Quiz Name is mandatory
                    </div>
                }

                <div className={styles.buttonParent}>
                    <button onClick={(() => navigate(-1))} className={`${styles.button}`}>
                        Cancel
                    </button>
                    <button
                        onClick={handleClick}
                        className={`${styles.button} ${styles.continue}`}>
                        Continue
                    </button>
                </div>

            </div>

        </div>
    )
}
