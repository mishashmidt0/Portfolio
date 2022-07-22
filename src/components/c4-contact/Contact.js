import React from 'react';

export const Contact = () => {
    return (
        <section className="contacts section" id="contacts">
            <div className="container container--s contacts__container">
                <a className="arrow-up" href="#about">
                </a>
                <p className="contacts__slogan scroll-item">Living, learning, & leveling up one day at a time.</p>
                <ul className="contacts__list scroll-item">
                    <li>
                        <a className="contacts__link icon-email scroll-show" href="mailto:elenafrontend@ya.ru"
                           title="elenafrontend@ya.ru">
                            <span className="visually-hidden">email</span>
                        </a>
                    </li>
                    <li>
                        <a className="contacts__link icon-phone scroll-show" href="tel:+79270337365"
                           title="+7 9270 33 73 65">
                            <span className="visually-hidden">phone</span>
                        </a>
                    </li>
                    <li>
                        <a className="contacts__link icon-telegram scroll-show" href="https://t.me/gumelena"
                           title="gumelena">
                            <span className="visually-hidden">telegram</span>
                        </a>
                    </li>
                    <li>
                        <a className="contacts__link icon-linkedin scroll-show" href="https://www.linkedin.com/in/elenafrontend/"
                            title="elenafrontend">
                            <span className="visually-hidden">linkedin</span>
                        </a>
                    </li>
                    <li>
                        <a className="contacts__link icon-github scroll-show" href="https://github.com/elenafrontend"
                           title="elenafrontend">
                            <span className="visually-hidden">github</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

