import React from 'react'
import styles from "./each.module.css"


export const Each = ({ index, question, type }) => {

    console.log(type)


    return (
        <div>
            <p>Q{index + 1} :&nbsp; {question?.question || "Question"}</p>

            {type === true ?             //true-qna  false-poll
                <div className={styles.boxparent}>

                    <div className={styles.box}>
                        <div>
                            <p style={{ fontSize: "30px" }}>60</p>
                            <p>People attempted the question</p>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div>
                            <p style={{ fontSize: "30px" }}>60</p>
                            <p>People attempted the question</p>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div>
                            <p style={{ fontSize: "30px" }}>60</p>
                            <p>People attempted the question</p>
                        </div>
                    </div>

                </div>

                :

                <div className={styles.pollparent}>

                    <div className={styles.pollbox}>

                        <p style={{ fontSize: "30px" }}>60</p>
                        <p>Option 1</p>

                    </div>

                    <div className={styles.pollbox}>

                        <p style={{ fontSize: "30px" }}>60</p>
                        <p>Option 2</p>

                    </div>

                    <div className={styles.pollbox}>

                        <p style={{ fontSize: "30px" }}>60</p>
                        <p>Option 3</p>

                    </div>

                    <div className={styles.pollbox}>

                        <p style={{ fontSize: "30px" }}>60</p>
                        <p>Option 4</p>

                    </div>

                </div>


            }
        </div>
    )
}
