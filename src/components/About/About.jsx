import React from 'react';
import styles from './About.module.css';


function About() {
    return (
        <div>
            <h1>Presento a About</h1>
            <div className={styles.smsan}>
                <img src="./images/about-Smith-Sanchez.jpg" alt="" />           
            </div>
            <div className={styles.auth}>
                <img src="./images/authors.jpg" alt="" />
            </div>
            <div className={styles.Dan}>
                <img src="./images/Dan Harmon.jpg" alt="" />
            </div>
            <div className={styles.guest}>
            <img src="./images/Episode Guest.jpg" alt="" />
            </div>
        </div>
    );
}
export default About;