import { Timer } from '../Timer/Timer'
import styles from "./textimgform.module.css"
import React, { useState, useEffect } from 'react'
import { Optiontype } from '../Optiontype/Optiontype'





export const Textimgform = ({ initialForm, page, getFormData, setOptionType }) => {

    const [option1Text, setOption1Text] = useState("");
    const [option2Text, setOption2Text] = useState("");
    const [option3Text, setOption3Text] = useState("");
    const [option4Text, setOption4Text] = useState("");

    const [selectedInput, setSelectedInput] = useState(1);
    const [formData, setFormData] = useState({
        question: '',
        answer: '',
        option1: '',
        option1text: '',
        option2: '',
        option2text: '',
        option3: '',
        option3text: '',
        option4: '',
        option4text: '',
        timer: '',
        optionType: 'textimgurl',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        // console.log(formData);
    };

    useEffect(() => {
        getFormData({ formData });
    }, [formData]);


    return (
        <div>
            <input type="text"
                name="question"
                placeholder='Poll Question'
                onChange={handleInputChange}
                className={styles.pollinput} />

            <Optiontype active={formData?.optionType}  handleInputChange={handleInputChange}  setOptionType={setOptionType} />


            <div className={styles.optionbar} >
                <div className={styles.inputparent}>
                    <input
                        onClick={() => setSelectedInput(1)}
                        className={styles.radio}
                        type="radio"
                        name="answer"
                        value="a"
                        onChange={handleInputChange}
                    />
                    <input name='option1' onChange={handleInputChange} type="text" placeholder="Image url" className={
                        selectedInput === 1 ? `${styles.input} ${styles.active}` : `${styles.input}`} />
                    <input name='option1text' onChange={handleInputChange} type="text" placeholder="Text" className={
                        selectedInput === 1 ? `${styles.input} ${styles.active}` : `${styles.input}`} />
                </div>

                <div
                    className={styles.inputparent}>
                    <input
                        onClick={() => setSelectedInput(2)}
                        className={styles.radio}
                        type="radio"
                        name="answer"
                        value="b"
                        onChange={handleInputChange}
                    />

                    <input name='option2' onChange={handleInputChange} type="text" placeholder="Image url"
                        className={
                            selectedInput === 2 ? `${styles.input} ${styles.active}` : `${styles.input}`
                        }
                    />
                    <input name='option2text' onChange={handleInputChange} type="text" placeholder="Text"
                        className={
                            selectedInput === 2 ? `${styles.input} ${styles.active}` : `${styles.input}`
                        }
                    />
                </div>

                <div className={styles.inputparent} >
                    <input
                        onClick={() => setSelectedInput(3)}
                        className={styles.radio}
                        type="radio"
                        name="answer"
                        value="c"
                        onChange={handleInputChange}
                    />

                    <input name='option3' onChange={handleInputChange} type="text" placeholder="Image url"
                        className={
                            selectedInput === 3 ? `${styles.input} ${styles.active}` : `${styles.input}`
                        }
                    />
                    <input name='option3text' onChange={handleInputChange} type="text" placeholder="Text"
                        className={
                            selectedInput === 3 ? `${styles.input} ${styles.active}` : `${styles.input}`
                        }
                    />
                </div>

                <div className={styles.inputparent}>
                    <input
                        onClick={() => setSelectedInput(4)}
                        className={styles.radio}
                        type="radio"
                        name="answer"
                        value="d"
                        onChange={handleInputChange}
                    />

                    <input name='option4' onChange={handleInputChange} type="text" placeholder="Image url"
                        className={
                            selectedInput === 4 ? `${styles.input} ${styles.active}` : `${styles.input}`
                        }
                    />
                    <input name='option4text' onChange={handleInputChange} type="text" placeholder="Text"
                        className={
                            selectedInput === 4 ? `${styles.input} ${styles.active}` : `${styles.input}`
                        }
                    />
                </div>

            </div>

            {
                initialForm?.type && <Timer handleInputChange={handleInputChange} />
            }


        </div>
    )
}
