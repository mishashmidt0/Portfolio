import React from 'react';
import myPhoto from "../../img/MyPhoto.jpg"
import style from "./about.module.scss"
import {v4 as uuidv4} from "uuid"

export const About = () => {
    const myInfo = [
        {id: uuidv4(), paragraph: "Пономаренко Михаил", text: ""},
        {id: uuidv4(), paragraph: "Проживаю", text: " в г. Саратов"},
        {id: uuidv4(), paragraph: "Возраст:", text: " 24 года"},
        {id: uuidv4(), paragraph: "Образование:", text: " ВКА им. Можайского, инженер"},
        {id: uuidv4(), paragraph: "Опыт: ", text: "более 6 месяцев"},
    ]
    return (
        <section className={`${style.about} section`} id="about">
            <div className={`container ${style["about__container"]}`}>
                <div className={`${style["about__photo"]} scroll-item`}>
                    <figure className={`${style["about__photo-wrapper"]} scroll-show`}>
                        <picture>
                            <img src={myPhoto} alt="MyPhoto"/>
                        </picture>
                    </figure>
                </div>
                <div className="scroll-item">
                    <div className={`${style["about__content"]} scroll-show`}>
                        <h2 className="title">О себе</h2>
                        <ul className={`${style["about__text"]} text ${style.list}`}>
                            {myInfo.map(elem=>  <li key={elem.id}><span> {elem.paragraph}</span> {elem.text}</li>)}
                        </ul>
                        <a className="btn" href="#pdf"
                           target="_blank" rel="noreferrer">Download CV</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

