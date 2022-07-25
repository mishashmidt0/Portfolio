import React from 'react';
import style from "./contact.module.scss"
import {v4 as uuidv4} from "uuid"

export const Contact = () => {

    const contacts = [
        {id: uuidv4(), name: "Telegram: ", href: "https://t.me/MishaShmidt", title: "MishaShmidt"},
        {id: uuidv4(), name: "Почта: ", href: "mailto:mishashmidt0@gmail.com", title: "mishashmidt0@gmail.com"},
        {id: uuidv4(), name: "GitHub: ", href: "https://github.com/mishashmidt0", title: "mishashmidt0"},
        {id: uuidv4(), name: "LinkedIn: ", href: "https://www.linkedin.com/in/mikhail-ponomarenko-b38050208/", title: "mikhail-ponomarenko"},
    ]

    return (
        <section className={`${style.contacts} section`} id="contacts">
            <div className={`contacts ${style["contacts__container"]}  container--s`}>
                <a className={`${style["arrow-up"]}`} href="#about">
                </a>
                <p className={`${style["contacts__slogan"]} scroll-item`}>Контакты</p>
                <ul className={`${style["contacts__list"]} scroll-item`}>
                    {contacts.map(elem =>
                        <li key={elem.id} >
                            <span>{elem.name}</span>
                            <a className={`${style["contacts__link"]} scroll-show`} href={elem.href} target="_blank" rel="noreferrer" >
                               {elem.title}
                            </a>
                        </li>)}
                </ul>
            </div>
        </section>
    );
};

