import React from 'react';

export const Contact = () => {
    return (
        <footer className="contacts section" id="contacts">
            <div className="container container--s contacts__container">
                <a className="arrow-up" href="#about">
                </a>
                <p className="contacts__slogan scroll-item">Living, learning, & leveling up one day at a time.</p>
                <ul className="contacts__list scroll-item">
                    <li>
                        <a className="contacts__link icon-email scroll-show" href="mailto:elenafrontend@ya.ru" target="_blank"
                           title="elenafrontend@ya.ru">
                            <span className="visually-hidden">email</span>
                        </a>
                    </li>
                    <li>
                        <a className="contacts__link icon-phone scroll-show" href="tel:+79270337365" target="_blank"
                           title="+7 9270 33 73 65">
                            <span className="visually-hidden">phone</span>
                        </a>
                    </li>
                    <li>
                        <a className="contacts__link icon-telegram scroll-show" href="https://t.me/gumelena" target="_blank"
                           title="gumelena">
                            <span className="visually-hidden">telegram</span>
                        </a>
                    </li>
                    <li>
                        <a className="contacts__link icon-linkedin scroll-show" href="https://www.linkedin.com/in/elenafrontend/"
                           target="_blank" title="elenafrontend">
                            <span className="visually-hidden">linkedin</span>
                        </a>
                    </li>
                    <li>
                        <a className="contacts__link icon-github scroll-show" href="https://github.com/elenafrontend" target="_blank"
                           title="elenafrontend">
                            <span className="visually-hidden">github</span>
                        </a>
                    </li>
                </ul>
                <div className="copyright"><span>&copy;</span> 2021 - Template developed by <a href="">Ponomarenko Mikhail</a></div>
            </div>
        </footer>
    );
};

