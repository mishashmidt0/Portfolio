import React from 'react';
import style from "./skills.module.scss"
import {v4 as uuidv4} from "uuid"

export const Skills = () => {

    const js = [
        {id: uuidv4(), desc:"Javascript", name: ["ES6+", "Typescript", "React"] },
        {id: uuidv4(), desc:"Для управления состоянием приложения", name: ["Redux", "redux-thunk","redux-toolkit"] },
        {id: uuidv4(), desc:"Для работы с данными и api ", name: ["Apollo Client", "Axios","fetch","Postman"] },
        {id: uuidv4(), desc:"Небольшой опыт по созданию серверов на ", name: ["Node.js"] },
        {id: uuidv4(), desc:"Базы данных ", name: ["PostgreSQL"] },
        {id: uuidv4(), desc:"Анализ и форматирования кода", name: ["ESLint", "Prettier","Husky"] },
        {id: uuidv4(), desc:"Для создания UI компонентов в изоляции использовал", name: ["Storybook"] },
        {id: uuidv4(), desc:"Таск-менеджеры", name: ["GitHub", "Trello"] },
        {id: uuidv4(), desc:"Контроль версий", name: ["Git"] },
        {id: uuidv4(), desc:"Графический дизайнер", name: ["figma"] },
        {id: uuidv4(), desc:"Также работал с ", name: ["MUI", "formik", ] },

    ]
    const html = [
        {id: uuidv4(), desc:"CSS + HTML (семантическая, кроссбраузерная, адаптивная верстка)", name: ["Sass","module css/scss"] },
    ]

    const test = [
        {id: uuidv4(), desc:"Работал с unit тестами на ", name: ["Jest"] },
    ]


    return (
        <section className={`${style.skills} section`} id="skills">
            <div className={`contacts ${style["skills__container"]}  container--s scroll-item`}>
                <a className={`${style["arrow-up"]}`} href="#about">
                </a>
                <p className={`${style["skills__slogan"]} scroll-item`}>Навыки</p>
                <ul className={`${style["skills__list"]} scroll-item`}>
                    <h3>JS, Основной опыт - на React.js</h3>
                    {js.map(elem =>
                        <li key={elem.id} className={`${style["skills__item"]} scroll-item`}>
                            <span className={`${style["description"]} scroll-item`}>{elem.desc}</span>
                            <ul>
                                {elem.name.map(skill=><li key={uuidv4()} className={`${style["skills__element"]} scroll-item`}>{skill}</li>)}
                            </ul>

                        </li>)}

                    <h3>CSS + HTML</h3>
                    {html.map(elem =>
                        <li key={elem.id}  className={`${style["skills__item"]} scroll-item`}>
                            <span className={`${style["description"]} scroll-item`}>{elem.desc}</span>
                            <ul>
                                {elem.name.map(skill=><li key={uuidv4()} className={`${style["skills__element"]} scroll-item`}>{skill}</li>)}
                            </ul>

                        </li>)}

                    <h3>Тестирование</h3>
                    {test.map(elem =>
                        <li key={elem.id}  className={`${style["skills__item"]} scroll-item`}>
                            <span className={`${style["description"]} scroll-item`}>{elem.desc}</span>
                            <ul>
                                {elem.name.map(skill=><li key={uuidv4()} className={`${style["skills__element"]} scroll-item`}>{skill}</li>)}
                            </ul>

                        </li>)}
                </ul>
            </div>
        </section>
    );
};

