import React, { useState, useEffect } from 'react'
import styles from "./question.module.css"
import axios, { all } from 'axios';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { useParams } from 'react-router-dom';
import { Each } from '../../components/Eachquestion/Each';



export const Question = () => {
    const params = useParams();
    const [quiz, setQuiz] = useState([]);

    useEffect(() => {
        const findQuiz = async () => {
            await axios.get(`http://localhost:3000/quiz/getquiz/${params.id}`)
                .then((res) => setQuiz(res.data))
                .catch((e) => console.log(e.message));
        }
        findQuiz();
    }, [params])






    return (
        <div className={styles.parent}>

            <Sidebar />

            <div className={styles.dashboardParent}>

                <div className={styles.top}>
                    <p className={styles.title} >{quiz?.title}</p>
                    <div className={styles.corner}>
                        <p>Created At : {quiz?.createdAt}</p>
                        <p>Impressions : {quiz?.impression}</p>
                    </div>
                </div>

                <div>
                    {
                        quiz &&
                        quiz?.quiz?.map((question, index) => (
                            <Each type={quiz.type} key={index} index={index} question={question} />
                        ))
                    }


                </div>







            </div>


        </div>
    )
}
