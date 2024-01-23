import React, { useState } from 'react'
import styles from "./imgform.module.css"

import { Svgon } from "../Svg/Svgon"
import { Svgoff } from "../Svg/Svgoff"
import { Optiontype } from '../Optiontype/Optiontype'


const svg = {
    svgon: (
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9.5" cy="9.5" r="9.5" fill="#D9D9D9" />
            <circle cx="9.5" cy="9.5" r="7.5" fill="white" />
            <circle cx="9.5" cy="9.5" r="5.5" fill="#60B84B" />
        </svg>
    ),
    svgoff: (
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9.5" cy="9.5" r="9.5" fill="#D9D9D9" />
            <circle cx="9.5" cy="9.5" r="7.5" fill="white" />
        </svg>
    )
}




export const Imgform = ({ setOptionType }) => {

    const [selectedInput, setSelectedInput] = useState(1);

    const [pollQuestion, setPollQuestion] = useState("");
    // const [optionType, setOptionType] = useState('text');

    const handleQuestionChange = (e) => {
        setPollQuestion(e.target.value);
    }

    return (
        <div>

            <input type="text"
                placeholder='Poll Question'
                onChange={handleQuestionChange}
                className={styles.pollinput} />

            <Optiontype setOptionType={setOptionType} />

            <div className={styles.optionbar} >
                <div
                    className={styles.inputparent}
                    onClick={() => setSelectedInput(1)} >
                    <div>
                        {selectedInput === 1 ?
                            (<Svgon />)
                            :
                            (<Svgoff />)
                        }
                    </div>

                    <input type='text'
                        placeholder='image URL'
                        className={
                            selectedInput === 1 ? `${styles.input} ${styles.active}` : `${styles.input}`
                        }
                    />
                </div>
                <div
                    className={styles.inputparent}
                    onClick={() => setSelectedInput(2)} >
                    <div>
                        {selectedInput === 2 ?
                            (<Svgon />)
                            :
                            (<Svgoff />)
                        }
                    </div>

                    <input type='text'
                        placeholder='image URL'
                        className={
                            selectedInput === 2 ? `${styles.input} ${styles.active}` : `${styles.input}`
                        }
                    />
                </div>
                <div
                    className={styles.inputparent}
                    onClick={() => setSelectedInput(3)} >
                    <div>
                        {selectedInput === 3 ?
                            (<Svgon />)
                            :
                            (<Svgoff />)
                        }
                    </div>

                    <input type='text'
                        placeholder='image URL'
                        className={
                            selectedInput === 3 ? `${styles.input} ${styles.active}` : `${styles.input}`
                        }
                    />
                </div>
                <div
                    className={styles.inputparent}
                    onClick={() => setSelectedInput(4)} >
                    <div>
                        {selectedInput === 4 ?
                            (<Svgon />)
                            :
                            (<Svgoff />)
                        }
                    </div>

                    <input type='text'
                        placeholder='image URL'
                        className={
                            selectedInput === 4 ? `${styles.input} ${styles.active}` : `${styles.input}`
                        }
                    />
                </div>
            </div>


        </div>
    )
}
