import axios from "axios";
import { Timer } from '../Timer/Timer';
import styles from "./pollpage.module.css"
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import { Optiontype } from '../Optiontype/Optiontype';
import { useSelector, useDispatch } from 'react-redux';
import { Imgform } from "../../components/Imgform/Imgform"
import { Textform } from "../../components/Textform/Textform"
import { Textimgform } from "../../components/Textimgform/Textimgform"
import { setInputValue, selectInputValue } from "../../../app/formSlice"



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
    text: <Textform initialForm={initialForm} setOptionType={setOptionType} getFormData={handleChange} page={page} />,
    imgurl: <Imgform initialForm={initialForm} setOptionType={setOptionType} getFormData={handleChange} page={page} />,
    textimgurl: <Textimgform initialForm={initialForm} setOptionType={setOptionType} getFormData={handleChange} page={page} />,
  }

  useEffect(() => {
    dispatch(setInputValue({ [page]: formData }));
  }, [formData])


  const handleCreate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) return;
    try {
      await axios.post("http://localhost:3000/quiz/publishquiz",
        { stateValue, initialForm }, {
        headers: {
          'Authorization': token,
        }
      })
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

      {/* {
        initialForm?.type && <Timer />
      } */}

    </div>
  )
}


// first fix the forms ->use one input tag , three radio button ->change triggers the onChange of input
// make questionwise data
// make quiz responsive
// edit quiz questions
