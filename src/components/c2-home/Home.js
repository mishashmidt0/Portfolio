import React from 'react';
import {TypeEffect} from "./TypeEffect";
import style from "./home.module.scss"

export const Home = () => {
    return (
        <section className={`${style.greeting} section`} id="greeting">
            <div className={`${style["greeting__container"]} container`}>
                <h1 className="visually-hidden">Ponomarenko Mikhail, Front-end developer</h1>
                <div className={`${style["greeting__text"]} scroll-item`} >
                    Привет! меня зовут <span className="text-color"><TypeEffect/></span>
                    <br/>
                    Я Front-end разработчик.
                </div>
                <a className={`btn btn--big ${style["greeting__btn"]} scroll-item`}  href="#about">Узнать больше</a>
            </div>
        </section>
    );
};

