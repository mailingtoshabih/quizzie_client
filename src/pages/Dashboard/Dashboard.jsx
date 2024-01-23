import React from 'react'
import styles from "./dashboard.module.css"
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Quizbox } from '../../components/Quizbox/Quizbox'
import { TrendingBox } from '../../components/TrendingBox/TrendingBox';

const dummyData = [
  {
    title: 'React',
    views: 1000,
    date: '2023-01-01',
  },
  {
    title: 'JavaScript',
    views: 800,
    date: '2023-01-05',
  },
  {
    title: 'CSS',
    views: 1200,
    date: '2023-01-10',
  },
  {
    title: 'Node',
    views: 900,
    date: '2023-01-15',
  },
  {
    title: 'React',
    views: 1500,
    date: '2023-01-20',
  },
  {
    title: 'HTML5',
    views: 700,
    date: '2023-01-25',
  },
  {
    title: 'Respon',
    views: 1100,
    date: '2023-02-01',
  },
  {
    title: 'ES6',
    views: 1300,
    date: '2023-02-05',
  },
  {
    title: 'MongoDB',
    views: 950,
    date: '2023-02-10',
  },
  {
    title: 'Docker',
    views: 1800,
    date: '2023-02-15',
  },
  {
    title: 'GraphQL',
    views: 1000,
    date: '2023-02-20',
  },
  {
    title: 'Web',
    views: 1200,
    date: '2023-02-25',
  },
];



export const Dashboard = () => {
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

        <div className={styles.trendingParent}>
          <p className={styles.trendingLogo}>
            Trending Quizes
          </p>
          <div className={styles.trending}>
            {/* all trending quizes mapping here*/}
            {
              dummyData?.map((quiz) => (
                <TrendingBox quiz={quiz} />
              ))
            }
          </div>
        </div>

      </div>


    </div>
  )
}
