import React from 'react';
import style from "./portfolio.module.scss"

export const Portfolio = () => {
    return (
        <section className={`${style.portfolio} section`} id="portfolio">
            <div className="container container--m">
                <h2 className="title portfolio__title scroll-item">My Recent Work</h2>
                <p className="subtitle portfolio__subtitle scroll-item">Here are a few projects I've worked on recently. You can see
                    more
                    <a href="https://github.com/elenafrontend" title="Github elenafrontend" target="_blank" rel="noreferrer">here</a>
                </p>
                <ul className="portfolio__list">
                    <li className="portfolio__item scroll-item">
                        <figure className="portfolio__card">
                            <div className="portfolio__card-img">
                                <img src="img/compress/portfolio_1.jpg" alt="portfolio #1"/>
                            </div>
                            <figcaption className="portfolio__card-about">
                                <h3 className="portfolio__card-title subtitle">App website</h3>
                                <p className="portfolio__card-description">sass, responsive, optimized, accessible, grid, flex, swiper</p>
                                <a className="portfolio__card-link btn" target="_blank"
                                   href="https://github.com/elenafrontend/layouts#projects" rel="noreferrer">View
                                    project</a>
                            </figcaption>
                        </figure>
                    </li>
                    <li className="portfolio__item scroll-item">
                        <figure className="portfolio__card">
                            <div className="portfolio__card-img">
                                <img src="img/compress/portfolio_2.jpg" alt="portfolio #2"/>
                            </div>
                            <figcaption className="portfolio__card-about">
                                <h3 className="portfolio__card-title subtitle">Real estate agency</h3>
                                <p className="portfolio__card-description">responsive, accessible, flex, slick, svg</p>
                                <a className="portfolio__card-link btn" target="_blank"
                                   href="https://elenafrontend.github.io/layouts/to2rent/index.html" rel="noreferrer">View project</a>
                            </figcaption>
                        </figure>
                    </li>
                    <li className="portfolio__item scroll-item">
                        <figure className="portfolio__card">
                            <div className="portfolio__card-img">
                                <img src="img/compress/portfolio_3.jpg" alt="portfolio #3"/>
                            </div>
                            <figcaption className="portfolio__card-about">
                                <h3 className="portfolio__card-title subtitle">Photo editor</h3>
                                <p className="portfolio__card-description">applying css filters to photos</p>
                                <a className="portfolio__card-link btn" target="_blank"
                                   href="https://elenafrontend.github.io/library/js/photo_editor/index.html" rel="noreferrer">View project</a>
                            </figcaption>
                        </figure>
                    </li>
                    <li className="portfolio__item scroll-item">
                        <figure className="portfolio__card">
                            <div className="portfolio__card-img">
                                <img src="img/compress/portfolio_4.jpg" alt="portfolio #4"/>
                            </div>
                            <figcaption className="portfolio__card-about">
                                <h3 className="portfolio__card-title subtitle">Messenger</h3>
                                <p className="portfolio__card-description">allows to add and delete messages</p>
                                <a className="portfolio__card-link btn" target="_blank"
                                   href="https://elenafrontend.github.io/library/js/chat/index.html" rel="noreferrer">View project</a>
                            </figcaption>
                        </figure>
                    </li>
                    <li className="portfolio__item scroll-item">
                        <figure className="portfolio__card">
                            <div className="portfolio__card-img">
                                <img src="img/portfolio_5.png" alt="portfolio #5"/>
                            </div>
                            <figcaption className="portfolio__card-about">
                                <h3 className="portfolio__card-title subtitle">Graphic editor</h3>
                                <p className="portfolio__card-description">you can draw a cat from squares</p>
                                <a className="portfolio__card-link btn" target="_blank"
                                   href="https://elenafrontend.github.io/library/js/graphic_editor/index.html" rel="noreferrer">View project</a>
                            </figcaption>
                        </figure>
                    </li>
                    <li className="portfolio__item scroll-item">
                        <figure className="portfolio__card">
                            <div className="portfolio__card-img">
                                <img src="img//portfolio_6.png" alt="portfolio #6"/>
                            </div>
                            <figcaption className="portfolio__card-about">
                                <h3 className="portfolio__card-title subtitle">Animation</h3>
                                <p className="portfolio__card-description">some cartoons</p>
                                <a className="portfolio__card-link btn" target="_blank"
                                   href="https://elenafrontend.github.io/animation/air_journey/index.html" rel="noreferrer">View project</a>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
            </div>
        </section>
    );
};

