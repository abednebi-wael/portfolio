import { useEffect, useState } from 'react'
import {
  faBootstrap,
  faCss3,
  faGitAlt,
  faHtml5,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/Animated'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './about.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

 
  useEffect(() => {
    let timeout;
  
    timeout = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  
    return () => {
      clearTimeout(timeout);
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
          I'm a very ambitious junior full stack developer looking for internship or job with the opportunity to work with the latest
            technologies on challenging projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on .
            
          </p>
          <p>
          I would describe myself as innovative, creative, adaptable to change, a fast learner,
           and someone who is prepared to go above and beyond what is required to ensure my employer always stays one step ahead of its competitors.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faBootstrap} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
