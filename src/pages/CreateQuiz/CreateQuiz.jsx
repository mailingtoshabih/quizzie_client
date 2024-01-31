import React, { useState } from 'react'
import styles from "./createquiz.module.css"
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Pollform } from '../../components/Pollform/Pollform';
import { Congrats } from '../../components/Congrats/Congrats';
import { Createform } from '../../components/CreateForm/Createform';


export const CreateQuiz = () => {

  const [initialForm, setInitialform] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formPage = {
    1: <Createform setInitialform={setInitialform} />,
    2: <Pollform initialForm={initialForm} setFormSubmitted={setFormSubmitted} />,
    3: <Congrats />,
  }


  return (
    <div className={styles.parent}>

      <Sidebar />

      <div className={styles.formParent}>
        {
          initialForm ?
            (formSubmitted ? formPage[3] : formPage[2])
            :
            formPage[1]
        }
      </div>
    </div>
  )
}
