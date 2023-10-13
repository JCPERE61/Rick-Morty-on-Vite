import React from 'react';
import styles from './About.module.css';


function About() {
    return (
        <div>
            <h1>About Rick and Morty</h1>

            <br></br>
            <br></br>
            <br></br>

          <article className={styles.smsan}>
          
            <p>Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim.</p>
            <p>The series follows the misadventures of Rick Sanchez, a cynical mad scientist, and his good-hearted but fretful grandson Morty Smith</p>

            <div >
                <img src="./images/about-Smith-Sanchez.jpg" alt="" />           
            </div>

          </article>

          <br></br>
            <br></br>
            <br></br>

          <article className={styles.auth}>

            <div>
            <p>Rick and Morty was created by Justin Roiland and Dan Harmon. The duo first met at Channel 101, a non-profit monthly short film festival in Los Angeles co-founded by Harmon</p>

            </div>
            
            
            <div >
                <img src="./images/authors.jpg" alt="" />
            </div>
            </article>

            <br></br>
            <br></br>
            <br></br>

            <article className={styles.Dan}>
            <span>Mark Justin Roiland has been involved in voice acting, animating, writing, producing, and directing. He became most known as the co-creator of Rick and Morty, for which he voiced the protagonists Rick Sanchez and Morty Smith</span>
            <div >
                <img src="./images/Dan Harmon.jpg" alt="" />
            </div>
            </article>

            <br></br>
            <br></br>
            <br></br>

            <article className={styles.guest}>
            <p>Daniel James Harmon has been involved in writing, producing, and acting. He co-created Rick and Morty and its subsequent franchise along with Justin Roiland, and co-founded television network and website Channel 101 along with Rob Schrab.</p>
            <div >
            <img src="./images/Episode Guest.jpg" alt="" />
            </div>

            </article>

            <br></br>
            <br></br>
            <br></br>
            
            <h1>About Me</h1>
            <p>I am a 62 year old electrical engineer, that has worked from technician at Schlumberger (1983-1985) to management at EcuaNet (1996-2002), the first Internet Service Provider in Ecuador.</p>
            <p>Born in Spain but raised in one of the smallest country of the "Other Spain" (Hispanic-America)</p>
            <p>Decided to explore Internet related topics and re-route my career, applied to "Soy Henry" to become a Backend Programmer. </p>
        </div>
    );
}
export default About;