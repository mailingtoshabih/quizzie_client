import React, { useState, useEffect } from 'react'
import styles from "./pollpage.module.css"
import { Optiontype } from '../Optiontype/Optiontype';
import { Textform } from "../../components/Textform/Textform"
import { Imgform } from "../../components/Imgform/Imgform"
import { Textimgform } from "../../components/Textimgform/Textimgform"
import { useSelector, useDispatch } from 'react-redux';
import { setInputValue, selectInputValue } from "../../../app/formSlice"




export const Pollpage = ({ page }) => {

  const dispatch = useDispatch();
  const stateValue = useSelector((state) => state.form.value);

  const [optionType, setOptionType] = useState('text');
  const [formData, setFormData] = useState({});

  const handleChange = (formdata) => {
    let data = formdata;
    // data.formData.question = pollQuestion;
    setFormData(data.formData);
  }

  const optionPage = {
    text: <Textform setOptionType={setOptionType} getFormData={handleChange} page={page} />,
    imgurl: <Imgform setOptionType={setOptionType} page={page} />,
    textimgurl: <Textimgform setOptionType={setOptionType} page={page} />
  }

  useEffect(() => {
    dispatch(setInputValue({ [page]: formData }));
  }, [formData])


  const handleCreate = (e) => {
    console.log(stateValue)
  }

  return (
    <div>

      <div className={styles.optionparent}>
        {optionType && optionPage[optionType]}

        {/* timer */}
      </div>



      <div className={styles.buttonParent}>
        <button className={`${styles.button}`}>
          Cancel
        </button>
        {page}
        <button className={`${styles.button} ${styles.continue}`} onClick={handleCreate}>
          Create Quiz
        </button>
      </div>

    </div>
  )
}
