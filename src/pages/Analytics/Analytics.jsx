import React from 'react'
import styles from "./analytics.module.css"
import { Sidebar } from '../../components/Sidebar/Sidebar'


export const Analytics = () => {
  return (
    <div className={styles.parent}>

      <Sidebar />

      <div className={styles.dashboardParent}>

        <div className={styles.boxParent}>
          <div className={styles.box}>
            <span>12</span> Quiz <br />Created
          </div>
          <div className={styles.box}>
            <span>110</span> Questions <br /> Created
          </div>
          <div className={styles.box}>
            <span>989</span> Total <br /> Impressions
          </div>
        </div>

  

      </div>




    </div>
  )
}
