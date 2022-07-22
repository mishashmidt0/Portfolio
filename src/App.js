import './App.css';
import {Header} from "./components/c1-header/Header";
import {About} from "./components/c3-about/About";
import {Home} from "./components/c2-home/Home";
import {Portfolio} from "./components/c6-portfolio/Portfolio";
import {Contact} from "./components/c4-contact/Contact";
import {Footer} from "./components/c8-footer/Footer";
import {Feedback} from "./components/c7-feedback/Feedback";
import {Skills} from "./components/c5-skills/Skills";

export const App = () => {
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


