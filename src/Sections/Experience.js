import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import ExperienceBloc from './ExperienceBloc';
import DownArrow from './css/img/down.png';
import UpArrow from './css/img/up.png';
import './css/style.css';

const Experience = () => {

    const [isToggled, setToggle] = useState(false);
    const [direction, setDirection] = useState(1);
    const [expActive, setActive] = useState(1);

    const swap = useSpring({
        transform: isToggled ? 'translate3d(0,0,0)' : direction===1 ? 'translate3d(0,90px,0)' : 'translate3d(0,-90px,0)'
    })

    const arrow = (direction) => {
        var newIndex
        if(direction === 1 && expActive > 1){
            newIndex = expActive - 1;
            setActive(newIndex);
            setDirection(1);
            setToggle(!isToggled);
        }
        if(direction === 2 && expActive < 3) {
            newIndex = expActive + 1;
            setActive(newIndex);
            setDirection(2);
            setToggle(!isToggled);
        }
    }

    return(
        <div id={"experience"}>
            <h2 className={"title_white"}>Experiences</h2>
            <div className={"experience_display"}>
                <div className={"arrows"}>
                    <img onClick={() => arrow(1)} className={"arrow_sizing"} src={UpArrow} alt={"upArrow"}/>
                    <img onClick={() => arrow(2)} className={"arrow_sizing"} src={DownArrow} alt={"downArrow"}/>
                </div>
                <animated.div style={swap}>
                    <ExperienceBloc
                        className={`exp${expActive === 1 ? "Active" : Math.abs(expActive - 1) > 1 ? "Hidden" : ""}`}
                        name={"IUT Robert Schumann"} desc={"DUT Informatique (2019-2021 - 2 ans)"}/>
                    <ExperienceBloc
                        className={`exp${expActive === 2 ? "Active" : Math.abs(expActive - 2) > 1 ? "Hidden" : ""}`}
                        name={"Pizzeria L'Arc Des Princes"} desc={"Job d'été : cuisinier dans une pizzeria (2015 - 1 mois)"}/>
                    <ExperienceBloc
                        className={`exp${expActive === 3 ? "Active" : Math.abs(expActive - 3) > 1 ? "Hidden" : ""}`}
                        name={"Entreprise SOPROFEN"} desc={"Stage d'observation (2016 - 21 jours)"}/>
                </animated.div>
            </div>
        </div>
    );
}

export default Experience;