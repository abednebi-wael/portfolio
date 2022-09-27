import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import Avatar from '../../../assets/images/ava.jpg'
import './index.scss'
import { Link } from 'react-router-dom'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
   
    <div className='home-img' ref={bgRef}>
          <div className='img-box'>
             <img src={Avatar} alt='avatar' />

             <h2>Wael-Abednebi <br/> <span>Full-Stack Developer</span></h2>

             <div className='social'  >
               
             </div>
             <Link to={'#'} className='hire-me'>Welcome</Link>
          </div>
       </div >
  )
}

export default Logo
