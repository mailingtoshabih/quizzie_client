import React from 'react'
import styles from "./each.module.css"


export const Each = ({ index, question, type, quiz }) => {

    function calculateCorrectAnswers(correctAnswer, listOfAnswers=[]) {
        if (listOfAnswers?.length === 0) return 0;
        const correctCount = listOfAnswers?.filter(answer => answer === correctAnswer).length;
        return correctCount;
    }

    function calculateAttemptedQuestions(arr = []) {
        if (arr.length === 0) return 0;
        const attemptedQuestions = arr?.filter(item => item !== false);
        return attemptedQuestions?.length;
    }

    function calculateIncorrectAnswers(correctAnswer, listOfAnswers=[]) {
        const incorrectCount = listOfAnswers?.filter(answer => !correctAnswer.includes(answer)).length;
        return incorrectCount;
    }

    const matchPoll = (arr) => {
        const combinedString = arr.join('').toLowerCase(); // Convert to lowercase for case-insensitivity

        // Count occurrences of each alphabet
        const counts = {
            a: (combinedString.match(/a/g) || []).length,
            b: (combinedString.match(/b/g) || []).length,
            c: (combinedString.match(/c/g) || []).length,
            d: (combinedString.match(/d/g) || []).length,
            // Add more alphabets as needed
        };

        return counts;
    }



    return (
        <div>
            <p className={styles.p}>Q{index + 1} :&nbsp; {question?.question || "Question"}</p>

            {type === true ?             //true-qna  false-poll
                <div className={styles.boxparent}>

                    <div className={styles.box}>
                        <div>
                            <p style={{ fontSize: "30px" }}>
                                {calculateAttemptedQuestions(question?.userAnswers)}
                            </p>
                            <p>People attempted the question</p>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div>
                            <p style={{ fontSize: "30px" }}>
                                {calculateCorrectAnswers(question?.answer, question?.userAnswers)}
                            </p>
                            <p>People answered correctly</p>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div>
                            <p style={{ fontSize: "30px" }}>
                                {calculateAttemptedQuestions(question?.userAnswers) - calculateCorrectAnswers(question?.answer, question?.userAnswers)}
                            </p>
                            <p>People answered incorrectly</p>
                        </div>
                    </div>

                </div>

                :

                <div className={styles.pollparent}>

                    <div className={styles.pollbox}>

                        <p style={{ fontSize: "30px" }}>
                            {matchPoll(question?.userAnswers || []).a}
                        </p>
                        <p>Option 1</p>

                    </div>

                    <div className={styles.pollbox}>

                        <p style={{ fontSize: "30px" }}>
                            {matchPoll(question?.userAnswers || []).b}
                        </p>
                        <p>Option 2</p>

                    </div>

                    <div className={styles.pollbox}>

                        <p style={{ fontSize: "30px" }}>
                            {matchPoll(question?.userAnswers || []).c}</p>
                        <p>Option 3</p>

                    </div>

                    <div className={styles.pollbox}>

                        <p style={{ fontSize: "30px" }}>
                            {matchPoll(question?.userAnswers || []).d}
                        </p>
                        <p>Option 4</p>

                    </div>

                </div>


            }
        </div>
    )
}
