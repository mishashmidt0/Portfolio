import React from 'react';
import style from "./portfolio.module.scss"
import image1 from "../../img/portfolio/1.jpg"
import image2 from "../../img/portfolio/2.jpg"
import image3 from "../../img/portfolio/3.jpg"
import image4 from "../../img/portfolio/4.jpg"
import image5 from "../../img/portfolio/5.jpg"
import image6 from "../../img/portfolio/6.jpg"


import Tilt from 'react-parallax-tilt';
import {v4 as uuidv4} from "uuid"

export const Portfolio = () => {

    const myProjects = [
        {
            name: "Christmas game",
            description: "Игра в которой вы можете выбрать новогодние игрушки, а затем нарядить Ёлку.",
            stack: ["TS", "React", "Redux Toolkit", "redux-thunk","Axios","jest", "Eslint","Prettier","Husky","MUI",],
            href: "https://mishashmidt0.github.io/christmas-game/",
            hrefCode: "https://github.com/mishashmidt0/christmas-game",
            img: image1
        },
        {
            name: "Card learning",
            description: "Web приложение где вы можете учиться по собственным карточкам или уже имеющимися",
            stack: ["TS", "React", "Redux", "redux-thunk","Axios","Eslint","Prettier","Husky","MUI","GitHub"],
            href: "https://mishashmidt0.github.io/Card-training/",
            hrefCode: "https://github.com/mishashmidt0/Card-training",
            img: image2
        },
        {
            name: "Todolist",
            description: "Web приложение задач, вы можете составть список задач, редактировать и отслеживать их",
            stack: ["TS", "React", "Redux","redux-thunk", "Jest","MUI", "formik","Axios"],
            href: "https://todolist-seven-rho.vercel.app/login",
            hrefCode: "https://github.com/mishashmidt0/todolist2.0",
            img: image3
        },
        {
            name: "Keyboard",
            description: "Виртуальная клавиатура",
            stack: ["JS", "HTML", "CSS"],
            href: "https://mishashmidt0.github.io/keyboard/",
            hrefCode: "https://github.com/mishashmidt0/keyboard",
            img: image4
        },
        {
            name: "Shelter",
            description: "Приют для животных, сайт  из двух страниц",
            stack: ["JS", "HTML", "CSS"],
            href: "https://mishashmidt0.github.io/shelter/#pets",
            hrefCode: "https://github.com/mishashmidt0/shelter",
            img: image5
        },
        {
            name: "Todo",
            description: "Todo со своим бэкэндом",
            stack: ["TS", "React", "Redux", "redux-thunk", "Node.js", "PostgreSQL", "Express"],
            href: "https://github.com/mishashmidt0/todo",
            hrefCode: "https://github.com/mishashmidt0/todo",
            img: image6
        },
    ]
    return (
        <section className={`${style.portfolio} section`} id="portfolio">
            <div className="container container--m">
                <h2 className={`title ${style["portfolio__title"]} scroll-item`}>Проекты</h2>
                <ul className={`${style["portfolio__list"]}`}>

                    {myProjects.map(project =>
                        <Tilt className={style.tilt} key={uuidv4()} tiltReverse>
                            <li className={`${style["portfolio__item"]} scroll-item`} id={"portfolio"}>
                                <div className={`${style["portfolio__card"]}`}>
                                    <div className={`${style["portfolio__card-img"]}`} style={{
                                        backgroundImage: `url(${project.img})`
                                    }}>
                                    </div>
                                    <div className={`${style["portfolio__card-about"]}`}>
                                        <h1 className={`${style["portfolio__card-title"]} subtitle`}>{project.name}</h1>
                                        <p className={`${style["portfolio__card-description"]}`}>{project.description}</p>

                                        <p className={style.stackContainer}>Технологии: <br/>{project.stack.map(el=><span key={uuidv4()} className={style.stack}>{el}</span>)}</p>

                                        <a className={`${style["portfolio__card-link"]} btn`} target="_blank"
                                           href={project.href} rel="noreferrer">Смотреть проект</a>
                                        <a className={`${style["portfolio__card-link"]} btn`} target="_blank"
                                           href={project.hrefCode} rel="noreferrer">Описание и код</a>
                                    </div>
                                </div>
                            </li>
                        </Tilt>
                    )}
                </ul>
                <p className={style.text}>Больше информации вы можете посмотреть у меня на <a href="">GitHub</a></p>
            </div>
        </section>
    );
};

