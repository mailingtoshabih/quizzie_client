import React, { useEffect, useState } from 'react'
import styles from "./congrats.module.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

export const Congrats = () => {

    const navigate = useNavigate();

    const handleClose = () => {
        navigate(-1);
    }

    const [link, setLink] = useState(null);

    useEffect(() => {
        const getLink = async () => {
            await axios.get("http://localhost:3000/quiz/recentquiz")
                .then((res) => setLink(res.data))
                .catch((e) => console.log(e.message));
        }
        getLink();
    }, [])

    const handleShare = () => {
        navigator.clipboard.writeText(link && link);
    }

    return (
        <div className={styles.parent}>
            <div className={styles.card}>

                <button onClick={handleClose}
                    className={styles.close}>
                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.2139 20.7307L11.3076 40.637M11.3076 20.7307L31.2139 40.637" stroke="#474444" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <p className={styles.congrats}>
                    Congrats your Quiz is Published!
                </p>

                <p className={styles.link}>
                    {link ? link : "Quiz link is loading..."}
                </p>

                <button className={styles.share}
                    onClick={handleShare}>
                    Share
                </button>
            </div>
        </div>
    )
}
