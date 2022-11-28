import React from 'react';
import './Test5.css'
import styles from './Test5.module.css'

const Test5 = () => {
    return (
        <div className="wrap">
            <div className="con"></div>
            <div className="con"></div>
            <div className={styles.con}></div>
            <div className={styles.con}></div>
            <hr />
            {/* 다중클래스 방법1 */}
            <div className="box bg"></div>
            <div className="box bg"></div>
            <div className={`${styles.box} ${styles.bg}`}></div>
            <div className={`box ${styles.bg}`}></div>
            <div className={`${styles.box} bg`}></div>

            {/* 다중클래스 방법2 */}
            <div className={[styles.box, styles.bg].join(' ')}></div>
            <div className={['box', styles.bg].join(' ')}></div>
            <div className={[styles.box, 'bg'].join(' ')}></div>
        </div>
    );
};

export default Test5;