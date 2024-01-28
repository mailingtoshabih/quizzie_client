import styles from "./timer.module.css";
import React, { useEffect, useState } from 'react';

export const Timer = ({handleInputChange}) => {
    const [timer, setTimer] = useState(false);

    // const handleInputChange = (event) => {
    //     const { value } = event.target;
    //     setTimer(value);
    // };

    const event = {
        target : {
            name : "timer",
            value : timer,
        }
    }
    useEffect(() => {
        handleInputChange(event)
    }, [timer])

    return (
        <div className={styles.parent}>
            <div>
                <p>Timer</p>

                <button
                    className={timer === false ? `${styles.btnselect}` : `${styles.btn}`}
                    onClick={() => setTimer(false)}
                >
                    Off
                </button>

                <button
                    className={timer === 5 ? `${styles.btnselect}` : `${styles.btn}`}
                    onClick={() => setTimer(5)}
                >
                    5 Sec
                </button>

                <button
                    className={timer === 10 ? `${styles.btnselect}` : `${styles.btn}`}
                    onClick={() => setTimer(10)}
                >
                    10 Sec
                </button>
            </div>
        </div>
    );
};
