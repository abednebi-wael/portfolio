import { Link, NavLink } from 'react-router-dom';
import './sideBar.scss'
import Logo from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGear, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons';

const SideBar = () => (
    
   <div className='nav-bar'>
     <Link className='logo' to={'/'}>
        <img src={Logo} alt='logo'/>
        <span className='abednebi'>AW</span>
     </Link>
     <nav>
        <NavLink exact="true" activeclaassname="active" to={'/'}>
            <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
        </NavLink>
        <NavLink exact="true" activeclaassname="active" className='about-link' to={'/about'}>
            <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
        </NavLink>
        <NavLink exact="true" activeclaassname="active" className='contact-link' to={'/contact'}>
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
        </NavLink>
        <NavLink exact="true" activeclaassname="active" className='skills-link' to={'/skills'}>
            <FontAwesomeIcon  icon={faGear} color='#4d4d4e'/>
        </NavLink>
        
     </nav>
     <ul>
         <li>
            <a
            target='_blank'
            rel='noreferrer'
            href='https://www.linkedin.com/in/wael-abednebi-6b906723a/'
            >
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
            </a>
         </li>
         <li>
            <a
            target='_blank'
            rel='noreferrer'
            href='https://github.com/abednebi-wael'
            >
                <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
            </a>
         </li>
         <li>
            <a
            target='_blank'
            rel='noreferrer'
            href='https://join.skype.com/invite/Ks3KULctqkrz'
            >
                <FontAwesomeIcon icon={faSkype} color='#4d4d4e'/>
            </a>
         </li>
         <li>
            <a
            target='_blank'
            rel='noreferrer'
            href='https://discord.com/channels/sneaky#0596'
            >
                <FontAwesomeIcon icon={faDiscord} color='#4d4d4e'/>
            </a>
         </li>
     </ul>

   </div>
    

)


export default SideBar