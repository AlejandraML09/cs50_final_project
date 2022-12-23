import React, { useEffect, useState } from "react";
import styles from './style.module.css';


const LoadingScreen = ({ show }) => {

    return (
        <div className={styles.loaderContainer} style={{ display: show ? 'flex' : 'none' }}>
        <span style={{ display: show ? 'block' : 'none' }} className={styles.loader}></span>

        </div>

    )

}


export default LoadingScreen;