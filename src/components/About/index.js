import { useEffect, useState } from 'react'
import {
  faJs,
  faCss3,
  faHtml5,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Cpp from '../../assets/images/pngegg.png'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects. I am also open to
            back-end development, with a strong passion for creating mobile and
            desktop applications, and a keen interest in cybersecurity.
          </p>
          <p align="LEFT">
            I'm quite confident, naturally curious, and perpetually working on
            improving my skills one design problem at a time. My problem-solving
            skills and creativity enable me to tackle complex challenges effectively
            and come up with innovative solutions.
          </p>
          <p>
            If I had to describe myself in one sentence: I love a challenge wherever it
            shows up, the opportunity to learn and grow as an individual is irreplaceable.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJs} color="#DD0031"/>
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faPython} color="#EFD81D"/>
            </div>
            <div className="face6">
              <img src={Cpp} alt="Cpp"/>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman"/>
    </>
  )
}

export default About
