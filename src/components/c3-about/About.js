import React from 'react';
import myPhoto from "../../img/MyPhoto.jpg"
export const About = () => {
    return (
        <section className="about section" id="about">
            <div className="container about__container">
                <div className="about__photo scroll-item">
                    <figure className="about__photo-wrapper scroll-show">
                        <picture>
                            <img src={myPhoto} alt="MyPhoto"/>
                        </picture>
                    </figure>
                </div>
                <div className="scroll-item">
                    <div className="about__content scroll-show">
                        <h2 className="title">About Me</h2>
                        <p className="about__text text">I like to code things from scratch, and enjoy bringing ideas to life in the
                            browser. Interested in working on ambitious projects with positive people.</p>
                        <p className="about__text text">Skills can be taught, personality is inherent. I prefer to keep learning,
                            continue challenging myself and do interesting things.</p>
                        <a className="btn" href="https://elenafrontend.github.io/portfolio/Gumerova_Elena_Frontend_Developer.pdf"
                           target="_blank" rel="noreferrer">Download CV</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

