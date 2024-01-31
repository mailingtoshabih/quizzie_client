import { useEffect, useState } from "react"
import React from 'react'
import styles from "./pagenum.module.css"
import { Pollpage } from "../Pollpage/Pollpage"
import { useSelector, useDispatch } from 'react-redux';
import { currentPage, setPage } from '../../../app/PageSlice';


export const Pagenum = React.memo(({ page, initialForm, setFormSubmitted }) => {

    const showPage = useSelector(currentPage);
    const dispatch = useDispatch();
    const [classname, setClassname] = useState(styles.newformActive);
    const [active, setActive] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(setPage(page));
    }

    useEffect(() => {
        if (showPage === page) {
            setClassname(styles.newformActive);
            setActive(true);
        }
        else {
            setClassname(styles.newformClosed);
            setActive(false);
        }
    }, [showPage])


    return (
        <>
            <div className={styles.parent}>
                {
                    active ?
                        <div onClick={handleClick}
                            className={`${styles.pagenum} ${styles.pagenumActive}`}
                        >
                            {page && page}
                        </div>
                        :
                        <div onClick={handleClick}
                            className={styles.pagenum}
                        >
                            {page && page}
                        </div>
                }

               

            </div>

            <div className={styles.pageparent}>
                <div className={classname}>
                    <Pollpage page={page}
                        initialForm={initialForm}
                        setFormSubmitted={setFormSubmitted} />
                </div>
            </div>
        </>
    )
}
);
