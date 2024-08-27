import { useState, useEffect } from "react";
import LogoTitle from '../../assets/images/logo-o.png';
import {Link} from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import Loader from 'react-loaders';
import Logo from "./Logo";
import './index.scss';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['w' ,'e' ,'n']

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        // Cleanup function
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <span className={`${letterClass} _13`}> </span>
                    <span className={`${letterClass} _14`}>I</span>
                    <span className={`${letterClass} _15`}>'m</span>
                    <span className={`${letterClass} _16`}> </span>
                    <img src={LogoTitle} alt="developer"/>
                    <AnimatedLetters letterClass={letterClass}
                                     strArray={nameArray}
                                     idx={17}/>
                    <br/>
                </h1>
                <h2>I'm pursuing a Bachelors of Science degree in
                    <br/>
                    Computer Science at Michigan State University</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Home