import React from 'react';
import style from "./footer.module.scss";

export const Footer = () => {
    return (
        <footer className={`${style.footer} section`} id="footer">
            <div className={`${style["footer__container"]}`}>
                <div className="copyright "><span>&copy;</span> 2022 - Portfolio developed by
                    <a href="#about" title="myLink" className={style["footer__link"]}> Ponomarenko Mikhail</a></div>
            </div>
        </footer>
    );
};

