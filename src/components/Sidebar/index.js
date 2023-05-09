import { Link, NavLink } from 'react-router-dom'

import LogoJ from '../../assets/images/J.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './index.scss'
const Sidebar = () => {

    return (
        <div className='nav-bar'>
            <Link className='logo' to="/">
                <img src={LogoJ} alt="logo" />
                <img className='sub-logo' src={LogoSubtitle} alt="slobodan" />

            </Link>
            <nav>
                <NavLink exact={"true"} activeclassname='active' to='/'>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>
                <NavLink exact={"true"} activeclassname='active' className="about-link" to='/about'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>
                <NavLink exact={"true"} activeclassname='active' className="contact-link" to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>

            </nav>

            <ul className='navUl'>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/johnny-2123"
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
            </ul>

        </div >
    )
}



export default Sidebar
