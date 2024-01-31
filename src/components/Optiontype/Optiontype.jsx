import React, { useEffect, useState } from 'react'
import styles from "./optiontype.module.css"


export const Optiontype = ({ active, setOptionType, handleInputChange }) => {

    const [selectedOption, setSelectedOption] = useState(active && active);
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setOptionType(event.target.value);
    };

    useEffect(() => {
        const event = {
            target: {
                name: "optionType",
                value: selectedOption,
            }
        }
        handleInputChange(event);
    }, [])

    useEffect(() => {
        setSelectedOption(active);
    }, [active])

   
    return (
        <div>

            <div className={styles.radioParent}>
                <p className={styles.quiztype}>
                    Option Type
                </p>

                {/* radio */}
                <div className={styles.labelParent}>
                    <label>
                        <input
                            type="radio"
                            name='optionType'
                            value="text"
                            checked={selectedOption === 'text'}
                            onChange={handleOptionChange}
                        />
                        Text
                    </label>

                    <label>
                        <input
                            name='optionType'
                            type="radio"
                            value="imgurl"
                            checked={selectedOption === 'imgurl'}
                            onChange={handleOptionChange}
                        />
                        Image URL
                    </label>

                    <label>
                        <input
                            name='optionType'
                            type="radio"
                            value="textimgurl"
                            checked={selectedOption === 'textimgurl'}
                            onChange={handleOptionChange}
                        />
                        Text & Image URL
                    </label>
                </div>
            </div>
        </div>
    )
}
