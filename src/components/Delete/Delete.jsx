import React from 'react'
import styles from './delete.module.css';
import axios from "axios";



export const Delete = ({ setDeleteModal }) => {

    const handleDelete = async (e) => {
        e.preventdefault();
        // await axios.delete("")
        //     .then((res) => console.log(res.data))
        //     .catch((e) => console.log(e.message));

        // write delete api
        // write question wise
        // make dashboard
        // responsive quiz
    }


    return (
        <div className={styles.parent}>

            <div className={styles.card}>

                <div>
                    <p className={styles.congrats}>
                        Are you sure you want to delete ?
                    </p>

                    <div className={styles.btnparent}>
                        <button className={styles.confirm} onClick={handleDelete}>Confirm Delete</button>
                        <button className={styles.cancel} onClick={() => setDeleteModal(false)}>Cancel</button>
                    </div>
                </div>

            </div>

        </div>
    )
}
