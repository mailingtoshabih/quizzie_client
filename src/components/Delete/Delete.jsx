import React from 'react'
import styles from './delete.module.css';
import axios from "axios";


export const Delete = ({ setDeleteModal, quiz }) => {

    const handleDelete = async (e) => {
        e.preventDefault();
        await axios.delete(`http://localhost:3000/quiz/delete/${quiz?._id}`)
            .then((res) => location.reload())
            .catch((e) => console.log(e.message));
    }

    
    // write question wise
    // make dashboard
    // responsive quiz


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
