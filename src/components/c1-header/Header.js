import React from 'react';

export const Header = () => {

    const nav = [
        {name: "Home", href: "#greeting"},
        {name: "About", href: "#about"},
        {name: "Contacts", href: "#contacts"},
        {name: "Skills", href: "#skills"},
        {name: "Portfolio", href: "#portfolio"},
        {name: "Home", href: "#greeting"},
        {name: "Home", href: "#greeting"},
        {name: "Feedback", href: "#feedback"},

    ]

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
                            <li className="nav__item">
                            <a className="nav__link nav__link--active" href={el.href}>{el.name}</a>
                        </li>)}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

