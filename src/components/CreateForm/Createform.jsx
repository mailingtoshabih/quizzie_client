import React, { useState }  from 'react'
import styles from "./createform.module.css"

export const Createform = () => {

    const [quizTitle, setQuizTitle] = useState("");
    const [radio, setRadio] = useState(true);


    return (
        <div className={styles.card}>

            <div className={styles.container3}>

                <input type="text" placeholder='Quiz Name'
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

                <div className={styles.buttonParent}>
                    <button className={`${styles.button}`}>
                        Cancel
                    </button>
                    <button className={`${styles.button} ${styles.continue}`}>
                        Continue
                    </button>
                </div>

            </div>

        </div>
    )
}
