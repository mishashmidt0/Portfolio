import React, {useEffect} from 'react';
import {v4 as uuidv4} from "uuid"
import {clickBtn, resetNav} from "./utils/utilsHeader";


export const Header = () => {
    const nav = [
        {name: "Home", href: "#greeting"},
        {name: "About", href: "#about"},
        {name: "Contacts", href: "#contacts"},
        {name: "Skills", href: "#skills"},
        {name: "Portfolio", href: "#portfolio"},
        {name: "Home", href: "#greeting"},
        {name: "Feedback", href: "#feedback"},

    ]

    useEffect(() => {
        let navLinks = document.querySelectorAll(".nav__link");
        let header = document.querySelector(".header");
        let burgerBtn = document.querySelector(".burger");

        window.addEventListener("mousemove", (mouseEvent) => {
            if (mouseEvent.clientY >= 0 && mouseEvent.clientY <= 60) {
                header.classList.add("header--active")
            }
        })

        window.addEventListener("scroll", () => {
            let scrollDistance = window.scrollY;
            let sections = document.querySelectorAll(".section");
            scrollDistance > 20 ? header.classList.add("header--active") : header.classList.remove("header--active")

            for (let i = 0; i < sections.length; i++) {

                let sectionPosition = sections[i].offsetTop;

                let navItems = document.querySelectorAll(".nav__item");

                if (sectionPosition - header.clientHeight < scrollDistance) {
                    for (let navLink of navLinks) {
                        navLink.classList.remove("nav__link--active");
                    }
                    navItems[i].querySelector("a").classList.add("nav__link--active");
                }

                let contacts = document.querySelector(".contacts");
                let contactsPosition = contacts.offsetTop - 200;

                if (contactsPosition - header.clientHeight < scrollDistance) {
                    for (let navLink of navLinks) {
                        navLink.classList.remove("nav__link--active");
                    }
                    navItems[i].querySelector("a").classList.add("nav__link--active");
                }
            }
        });

        burgerBtn.addEventListener("click", () => clickBtn(burgerBtn, header));

        // закрываем бургер при клике на ссылку в меню
        for (let navLink of navLinks) {
            navLink.addEventListener("click", () => resetNav(burgerBtn, header));
        }
        // закрываем бургер меню при ресайзе окна
        window.addEventListener("resize", () => resetNav(burgerBtn, header));

    }, [])

    return (
        <header className="header">
            <div className="container header__container">
                <a className="logo" href="src/components/c1-header/Header#">M</a>

                <button className="burger">
                    <span className="visually-hidden">Open menu</span>
                    <span className="burger__line"></span>
                </button>

                <nav className="nav">
                    <ul className="nav__list">
                        {nav.map(el =>
                            <li className="nav__item" key={uuidv4()}>
                                <a className="nav__link" href={el.href}>{el.name}</a>
                            </li>)}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

