import React, { useState, useEffect } from 'react'
import styles from "./imgform.module.css"
import { Svgon } from "../Svg/Svgon"
import { Svgoff } from "../Svg/Svgoff"
import { useSelector, useDispatch } from 'react-redux';
import { Optiontype } from '../Optiontype/Optiontype'




export const Imgform = ({ page, getFormData, setOptionType }) => {

    // const [optionType, setOptionType] = useState('text');
    const [selectedInput, setSelectedInput] = useState(1);
    const [pollQuestion, setPollQuestion] = useState("");
    const [formData, setFormData] = useState({
        question: '',
        answer: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        timer: ''
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
            <input type="text"
                name="question"
                placeholder='Poll Question'
                onChange={handleInputChange}
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
                        name='option1' onChange={handleInputChange}
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
                        name='option2' onChange={handleInputChange}
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
                    name='option3' onChange={handleInputChange}
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
                    name='option4' onChange={handleInputChange}
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
