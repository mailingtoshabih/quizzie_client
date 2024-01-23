import React from 'react'
import styles from "./logo.module.css"
import { Link } from "react-router-dom"


export const Logo = () => {
    return (
        <div>
            <p className={styles.logo}>
                QUIZZIE
            </p>
        </div>
    )
}
