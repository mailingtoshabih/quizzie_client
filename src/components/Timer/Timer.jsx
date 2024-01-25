import styles from "./timer.module.css"

import React, { useState, useEffect } from 'react'



export const Timer = () => {

    const [timer, setTimer] = useState(false);

    return (
        <div className={styles.parent}>
            <div>
                <p>Timer</p>
                <button className={timer === false ? `${styles.btnselect}` : `${styles.btn}`}
                    onClick={() => setTimer(false)} >Off</button>

                <button className={timer === 5 ? `${styles.btnselect}` : `${styles.btn}`}
                    onClick={() => setTimer(5)}>5 Sec</button>

                <button className={timer === 10 ? `${styles.btnselect}` : `${styles.btn}`}
                    onClick={() => setTimer(10)}>10 Sec</button>
            </div>

        </div>
    )
}
