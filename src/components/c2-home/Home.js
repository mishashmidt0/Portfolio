import React from 'react';

export const Home = () => {
    return (
        <section className="greeting section" id="greeting">
            <div className="container greeting__container">
                <h1 className="visually-hidden">Ponomarenko Mikhail, Front-end developer</h1>
                <p className="greeting__text scroll-item">
                    Hi, my name is <span className="text-color typed"></span>
                    <br/>
                        I'm a Front-end Developer.
                </p>
                <a className="btn btn--big greeting__btn scroll-item" href="#about">Know more</a>
            </div>
        </section>
    );
};

