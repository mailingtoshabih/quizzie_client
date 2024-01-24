import React, { useState, useEffect } from 'react'
import axios from "axios";
import styles from "./pollpage.module.css"
import { Optiontype } from '../Optiontype/Optiontype';
import { Textform } from "../../components/Textform/Textform"
import { Imgform } from "../../components/Imgform/Imgform"
import { Textimgform } from "../../components/Textimgform/Textimgform"
import { useSelector, useDispatch } from 'react-redux';
import { setInputValue, selectInputValue } from "../../../app/formSlice"
import { useNavigate } from 'react-router-dom';



export const Pollpage = ({ page, initialForm, setFormSubmitted }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stateValue = useSelector((state) => state.form.value);

  const [optionType, setOptionType] = useState('text');
  const [formData, setFormData] = useState({});
  console.log(formData)

  const handleChange = (formdata) => {
    let data = formdata;
    // data.formData.question = pollQuestion;
    setFormData(data.formData);
  }

  const optionPage = {
    text: <Textform setOptionType={setOptionType} getFormData={handleChange} page={page} />,
    imgurl: <Imgform setOptionType={setOptionType} getFormData={handleChange} page={page} />,
    textimgurl: <Textimgform setOptionType={setOptionType} getFormData={handleChange} page={page} />,
  }

  useEffect(() => {
    dispatch(setInputValue({ [page]: formData }));
  }, [formData])


  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/quiz/publishquiz", { stateValue, initialForm })
        .then((res) => res.data && setFormSubmitted(true))
        .catch((e) => console.log(e.message));

      console.log(response.data);
    } catch {
      (e) => console.log(e.message)
    }
  }

  return (
    <div>

      <div className={styles.optionparent}>
        {optionType && optionPage[optionType]}

        {/* timer */}
      </div>



      <div className={styles.buttonParent}>
        <button
          onClick={(() => navigate(-1))}
          className={`${styles.button}`}>
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
