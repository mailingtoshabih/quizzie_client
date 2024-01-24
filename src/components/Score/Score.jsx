import React from 'react'
import styles from "./score.module.css"
import { Link, useNavigate } from 'react-router-dom'
import award from "../../assets/image 2.png"


export const Score = () => {

    const navigate = useNavigate();

    const handleClose = () => {
        navigate(-1);
    }


    return (
        <div className={styles.parent}>
            <div className={styles.card}>
                <p>
                    Congrats Quiz is completed
                </p>

                <img src={award} alt="award" />

                <p className={styles.p}>
                    Your Score is &nbsp;<span style={{ color: "#60B84B" }}>03/04</span>
                </p>
            </div >
        </div >
    )
}
