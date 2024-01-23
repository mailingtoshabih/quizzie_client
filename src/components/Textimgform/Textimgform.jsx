import React, { useState } from 'react'
import styles from "./textimgform.module.css"
import { Svgon } from "../Svg/Svgon"
import { Svgoff } from "../Svg/Svgoff"
import { Optiontype } from '../Optiontype/Optiontype'





export const Textimgform = ({setOptionType}) => {

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

                <div className={styles.inputparent}
                    onClick={() => setSelectedInput(1)} >
                    <div>
                        {selectedInput === 1 ?
                            (<Svgon />)
                            :
                            (<Svgoff />)
                        }
                    </div>
                    <input type="text" placeholder="Text" className={
                        selectedInput === 1 ? `${styles.input} ${styles.active}` : `${styles.input}`} />
                    <input type="text" placeholder="Image URL" className={
                        selectedInput === 1 ? `${styles.input} ${styles.active}` : `${styles.input}`} />
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

                    <input type="text" placeholder="Text"
                        className={
                            selectedInput === 2 ? `${styles.input} ${styles.active}` : `${styles.input}`
                        }
                    />
                    <input type="text" placeholder="Image URL"
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

                    <input type="text" placeholder="Text"
                        className={
                            selectedInput === 3 ? `${styles.input} ${styles.active}` : `${styles.input}`
                        }
                    />
                    <input type="text" placeholder="Image URL"
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

                    <input type="text" placeholder="Text"
                        className={
                            selectedInput === 4 ? `${styles.input} ${styles.active}` : `${styles.input}`
                        }
                    />
                    <input type="text" placeholder="Image URL"
                        className={
                            selectedInput === 4 ? `${styles.input} ${styles.active}` : `${styles.input}`
                        }
                    />
                </div>

            </div>


        </div>
    )
}
