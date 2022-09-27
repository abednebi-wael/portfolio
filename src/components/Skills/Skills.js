import './skills.scss'
import img from '../../assets/images/skills.jpg'
import AnimatedLetters from '../AnimatedLetters/Animated'
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';


function Skills() {
  const [toggel, setToggel] = useState(true)

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
    <div className="container skills-page">
        <div className="text-zone">
         <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S ', 'k', 'i', 'l', 'l', 's']}
              idx={6}
            />
          </h1>
    <div className='container home-container'>
       <div className='logo'>
          <div className={ toggel ?'main-img active':'main-img'}>
             <span className='circle'></span>
             <span className='circle'></span>
             <span className='circle'></span>
             <span className='circle'></span>
             <span className='circle'></span>
             <span className='circle'></span>
             <span className='circle'></span>
          </div>

          <img onClick={() => setToggel(!toggel)} src={img} alt=''  />
          
    </div>
      </div>

       </div>
    </div>
      <Loader type="pacman" />

    </>
  )
}


export default Skills