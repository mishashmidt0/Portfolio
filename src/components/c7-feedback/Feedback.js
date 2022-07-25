import React from 'react';
import style from "./feedback.module.scss";
import {FormContainer} from "./formik/Form";



export const Feedback = () => {


    return (
    <section className={`${style.feedback} section`} id="feedback">
        <div className={`contacts ${style["feedback__container"]}  container--s`}>
            <div className={style["feedback__list"]}>
                <FormContainer />
            </div>
        </div>
    </section>
    );
};

