import React, { useState } from 'react'
import styles from "./optiontype.module.css"


export const Optiontype = ({ setOptionType }) => {

    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setOptionType(event.target.value);
    };
    // console.log(selectedOption)


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
                            value="text"
                            checked={selectedOption === 'text'}
                            onChange={handleOptionChange}
                        />
                        Text
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="imgurl"
                            checked={selectedOption === 'imgurl'}
                            onChange={handleOptionChange}
                        />
                        Image URL
                    </label>

                    <label>
                        <input
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
