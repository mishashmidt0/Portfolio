import {About} from "./components/c3-about/About";
import {Home} from "./components/c2-home/Home";
import {Portfolio} from "./components/c6-portfolio/Portfolio";
import {Contact} from "./components/c4-contact/Contact";
import {Footer} from "./components/c8-footer/Footer";
import {Feedback} from "./components/c7-feedback/Feedback";
import {Skills} from "./components/c5-skills/Skills";
import {useEffect} from "react";
import {Header} from "./components/c1-header/Header";
import {scrollObserve} from "./util/util";


export const App = () => {
    useEffect(() => {
        const scrollItems = document.querySelectorAll(".scroll-item");
        scrollItems.forEach(item => scrollObserve.observe(item))
    }, [])

    return (
        <div className="App">
            <Header/>
            <main>
                <Home/>
                <About/>
                <Contact/>
                <Skills/>
                <Portfolio/>
                <Feedback/>
            </main>
            <Footer/>
        </div>
    );
}


