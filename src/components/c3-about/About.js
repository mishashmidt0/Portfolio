import React from 'react';
import myPhoto from "../../img/MyPhoto.jpg"
import style from "./about.module.scss"
import {v4 as uuidv4} from "uuid"

export const About = () => {
    const myInfo = [
        {id: uuidv4(), paragraph: "Пономаренко Михаил", text: ""},
        {id: uuidv4(), paragraph: "", text: "Активно слежу за новыми технологиями и по возможности стараюсь их внедрить в рабочий процесс для улучшения качества, производительности"},
        {id: uuidv4(), paragraph: "Образование:", text: " Высшее, ВКА им. Можайского, инженер ракетно-космических комплексов"},
        {id: uuidv4(), paragraph: "Опыт: ", text: "более 4 месяцев занимаюсь разработкой приложений совместно с командой и самостоятельно"},
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
                        <a className="btn" href="https://parallel-license-fbc.notion.site/Ponomarenko-Mikhail-f39a0aa27b81490f885a71b9f7ced017"
                           target="_blank" rel="noreferrer">Notion CV</a>
                        <a className="btn" href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4d6d4300-d28f-400e-8748-76c6f0c27ec3/Ponomarenko_Mikhail.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220725T185505Z&X-Amz-Expires=86400&X-Amz-Signature=9a1a03617eeb9f6ea6e30c9e66715b190e60680d550d12773db6b1405eef5644&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Ponomarenko_Mikhail.pdf%22&x-id=GetObject"
                           target="_blank" rel="noreferrer">pdf CV</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

