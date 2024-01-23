import React, { useState } from 'react'
import styles from "./createquiz.module.css"
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Createform } from '../../components/CreateForm/Createform';
import { Pollform } from '../../components/Pollform/Pollform';


export const CreateQuiz = () => {

  const formPage = {
    1 : <Createform/>,
    2 : <Pollform/>,
  }


  return (
    <div className={styles.parent}>

      <Sidebar />

      <div className={styles.formParent}>


        {/* <Createform /> */}
        {/* <Pollform/> */}
        {formPage[2]}



      </div>

    </div>
  )
}
