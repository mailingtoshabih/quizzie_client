import React from 'react'
import styles from "./prompt.module.css"

export const Prompt = ({ message }) => {
  return (
    <div className={styles.parent}>

      <p className={styles.p}>
        {message && message}
      </p>

    </div>
  )
}
