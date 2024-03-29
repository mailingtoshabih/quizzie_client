import { Timer } from '../Timer/Timer';
import styles from "./textform.module.css"
import React, { useEffect, useState } from 'react'
import { Optiontype } from '../Optiontype/Optiontype';


export const Textform = ({ initialForm, page, getFormData, setOptionType }) => {

    const [selectedInput, setSelectedInput] = useState(1);
    const [formData, setFormData] = useState({
        question: '',
        answer: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        timer: '',
        optionType: 'text',
    });
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    useEffect(() => {
        getFormData({ formData });
    }, [formData]);


    return (
        <div>
            <div>
                <input type="text"
                    name='question'
                    placeholder='Poll Question'
                    onChange={handleInputChange}
                    className={styles.pollinput} />

                <Optiontype active={'text'}
                    handleInputChange={handleInputChange}
                    setOptionType={setOptionType} />


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
                        <input type='text'
                            name='option1' onChange={handleInputChange}
                            placeholder='Text'
                            className={selectedInput === 1 ? `${styles.input} ${styles.active}` : `${styles.input}`} />
                    </div>

                    <div className={styles.inputparent}>
                        <input
                            onClick={() => setSelectedInput(2)}
                            className={styles.radio}
                            type="radio"
                            name="answer"
                            value="b"
                            onChange={handleInputChange}
                        />

                        <input type='text'
                            name='option2' onChange={handleInputChange}
                            placeholder='Text'
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

                        <input type='text'
                            name='option3' onChange={handleInputChange}
                            placeholder='Text'
                            className={
                                selectedInput === 3 ? `${styles.input} ${styles.active}` : `${styles.input}`
                            }
                        />
                    </div>

                    <div className={styles.inputparent} >
                        <input
                            onClick={() => setSelectedInput(4)}
                            className={styles.radio}
                            type="radio"
                            name="answer"
                            value="d"
                            onChange={handleInputChange}
                        />

                        <input type='text'
                            name='option4' onChange={handleInputChange}
                            placeholder="Text"
                            className={
                                selectedInput === 4 ? `${styles.input} ${styles.active}` : `${styles.input}`
                            }
                        />
                    </div>

                </div>


            </div>

            {
                initialForm?.type && <Timer handleInputChange={handleInputChange} />
            }

        </div>
    )
}
