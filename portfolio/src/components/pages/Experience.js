import React from "react";

import styles from './PageLayout.module.css'
import cardStyles from './Experience.module.css'
import BouncyLetter from "../reusables/BouncyLetter"
import SkillBar from '../reusables/SkillBar'
import Card from '../reusables/Card'


import pfeIcon from '../../images/pfe.png'
import freelanceIcon from '../../images/freelancing.png'

function Experience(props) {
    const title = "My Experience"

    return (
        <div className={styles.mainContainer}>
            <div className={styles.textContainer}>
                <h2 className="bouncingLetters">
                {
                    title.split("").map((letter, index) => {
                        return <BouncyLetter key={index} letter={letter} />
                    })
                }
                </h2>
                <p>
                I've been programming for 5 years, and took part in many contests and competitions on National and International levels. 
                I'm constantly trying to gain more experience and learn new skills.
                Please keep in mind that this skillchat shows only a few most important skills of mine
                </p>
            </div>
        
            <div  className={styles.widgetContainer}>
                <SkillBar
                    title={"HTML"}
                    progress={90}
                    color={"#e67410"}
                />
                <SkillBar
                    title={"CSS"}
                    progress={85}
                    color={"#e6db10"}
                />
                <SkillBar
                    title={"JavaScript"}
                    progress={65}
                    color={"#10e646"}
                />
                <SkillBar
                    title={"ReactJS"}
                    progress={50}
                    color={"#1034e6"}
                />
                <SkillBar
                    title={"ExpressJS"}
                    progress={45}
                    color={"#6510e6"}
                />
                <SkillBar
                    title={"NodeJS"}
                    progress={40}
                    color={"#c71c71"}
                />

                <div className={cardStyles.cardContainer} >
                    <Card 
                        icon={freelanceIcon}
                        title={"Freelancing"}
                        company={""}
                        timespan={"Now"}
                        description={"I create responsive websites for desktop and mobile. I work with Frontend and Backend frameworks in order to deliver best quality products"}
                    />
                    <Card 
                        icon={pfeIcon}
                        title={"Technician and Backend developer"}
                        company={"Polska Federacja Esportowa"}
                        timespan={"May 2021 - September 2022"}
                        description={"PFE is a legal foundation that with esports. We carry out events / projects / orders for companies and more!"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Experience;