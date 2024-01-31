import axios, { all } from 'axios';
import styles from "./question.module.css"
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import { Each } from '../../components/Eachquestion/Each';
import { Sidebar } from '../../components/Sidebar/Sidebar';



export const Question = () => {
    const backendUrl = import.meta.env.VITE_BACKEND;
    const params = useParams();
    const [quiz, setQuiz] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const findQuiz = async () => {
            if (!token) return;
            await axios.get(`${backendUrl}quiz/getquiz/${params.id}`, {
                headers: {
                    'Authorization': token,
                }
            })
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
                    <p className={styles.title} >{quiz?.title} Question Analysis</p>
                    <div className={styles.corner}>
                        <p>Created At : {quiz?.createdAt}</p>
                        <p>Impressions : {quiz?.impression}</p>
                    </div>
                </div>

                <div>
                    {
                        quiz &&
                        quiz?.quiz?.map((question, index) => (
                            <Each type={quiz.type} key={index} index={index} quiz={quiz} question={question} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
