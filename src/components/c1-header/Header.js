import React, {useEffect, useState} from 'react';
import {v4 as uuidv4} from "uuid"
import { sectionObserve} from "./utils/utilsHeader";
import style from "./header.module.scss"

export const Header = () => {
    const [isActive, setIsActive] = useState(false)
    const [isHeader, setIsHeader] = useState(false)
    const nav = [
        {id: "greeting", name: "Приветствие", href: "#greeting"},
        {id: "about", name: "О себе", href: "#about"},
        {id: "contacts", name: "Контакты", href: "#contacts"},
        {id: "skills", name: "Навыки", href: "#skills"},
        {id: "portfolio", name: "Проекты", href: "#portfolio"},
        {id: "feedback", name: "Обратная связь", href: "#feedback"},
    ]

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        sections.forEach(section => sectionObserve.observe(section))

        window.addEventListener("mousemove", (mouseEvent) => {
            if (mouseEvent.clientY >= 0 && mouseEvent.clientY <= 60) {
                setIsHeader(true)
            }
        })

        window.addEventListener("scroll", () => {
            let scrollDistance = window.scrollY;
            scrollDistance > 20 ?   setIsHeader(true) : setIsHeader(false)
        });

        window.addEventListener("resize",  ()=>clickBtn(false));
    }, [])


    const clickBtn = (value) => {
        setIsActive(value)
    }

    return (
        <header className={`${style.header} ${isActive? style["header--active-nav"]: ""} ${isHeader? style["header--active"]: ""}`}>
            <div className={`${style["header__container"]}`}>
                <a className={style.logo} href="src/components/c1-header/Header#">M</a>

                <button className={`${style.burger} ${isActive? style["burger--active"]: ""} `} onClick={()=>clickBtn(!isActive)}>
                    <span className={style["visually-hidden"]}>Open menu</span>
                    <span className={style["burger__line"]}></span>
                </button>

                <nav className={style.nav}>
                    <ul className={style["nav__list"]}>
                        {nav.map(el =>
                            <li className={style["nav__item"]} key={uuidv4()}>
                                <a className={style["nav__link"]} href={el.href} data-id={el.id} onClick={()=>clickBtn(false)}>{el.name}</a>
                            </li>)}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

