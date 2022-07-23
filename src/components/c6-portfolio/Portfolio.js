import React from 'react';
import style from "./portfolio.module.scss"
import image from "../../img/portfolio_1.png"
import Tilt from 'react-parallax-tilt';
import {v4 as uuidv4} from "uuid"

export const Portfolio = () => {

    const myProjects = [
        {name: "App website", description: "sass, responsive, optimized, accessible, grid, flex, swiper", href: "https://github.com/elenafrontend/layouts#projects", img: image},
        {name: "App website", description: "sass, responsive, optimized, accessible, grid, flex, swiper", href: "https://github.com/elenafrontend/layouts#projects", img: image},
        {name: "App website", description: "sass, responsive, optimized, accessible, grid, flex, swiper", href: "https://github.com/elenafrontend/layouts#projects", img: image},
        {name: "App website", description: "sass, responsive, optimized, accessible, grid, flex, swiper", href: "https://github.com/elenafrontend/layouts#projects", img: image},
        {name: "App website", description: "sass, responsive, optimized, accessible, grid, flex, swiper", href: "https://github.com/elenafrontend/layouts#projects", img: image},
        {name: "App website", description: "sass, responsive, optimized, accessible, grid, flex, swiper", href: "https://github.com/elenafrontend/layouts#projects", img: image},
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
                                    <div className={`${style["portfolio__card-img"]}`}>
                                        <img src={project.img} alt={project.name}/>
                                    </div>
                                    <div className={`${style["portfolio__card-about"]}`}>
                                        <h1 className={`${style["portfolio__card-title"]} subtitle`}>{project.name}</h1>
                                        <p className={`${style["portfolio__card-description"]}`}>{project.description}</p>
                                        <a className={`${style["portfolio__card-link"]} btn`} target="_blank"
                                           href={project.href} rel="noreferrer">Смотреть проект</a>
                                    </div>
                                </div>
                            </li>
                        </Tilt>
                    )}
                </ul>
            </div>
        </section>
    );
};

