import React, { useState, useEffect } from 'react'
import styles from "./pollform.module.css"
import { Pollpage } from '../Pollpage/Pollpage';
import { Pagenum } from '../Pagenum/Pagenum';
import { useSelector } from 'react-redux';


export const Pollform = ({initialForm, setFormSubmitted}) => {

    const [activePage, setActivePage] = useState(1);
    const [page, setPage] = useState(1);

 


    const renderedPages = [
        <Pagenum page={1} initialForm={initialForm} setFormSubmitted={setFormSubmitted}/>,
        <Pagenum page={2} initialForm={initialForm} setFormSubmitted={setFormSubmitted}/>,
        <Pagenum page={3} initialForm={initialForm} setFormSubmitted={setFormSubmitted}/>,
        <Pagenum page={4} initialForm={initialForm} setFormSubmitted={setFormSubmitted}/>,
        <Pagenum page={5} initialForm={initialForm} setFormSubmitted={setFormSubmitted}/>,
    ]

    const handleAdd = (e) => {
        e.preventDefault();
        setPage(page + 1);
    }


    return (
        <div className={styles.card}>
            <div className={styles.container3}>
                <div className={styles.paginationParent}>
                    <div className={styles.pagenumpar}>
                        {
                            renderedPages?.length > 0 &&
                            renderedPages?.slice(0, page).map((page, index) => (
                                <>
                                    {/* <Pagenum page={index + 1} /> */}
                                    {page}
                                </>
                            ))
                        }

    

                        {page < 5 &&
                            <div className={styles.add}
                                onClick={handleAdd}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.9} stroke="#969696" className="w-2 h-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </div>
                        }
                    </div>

                    {/* ----------- */}

                    <p className={styles.maxpara}>
                        Max 5 Questions
                    </p>
                </div>


            </div>
        </div >
    )
}
