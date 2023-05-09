import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/J.png'
import './index.scss'
const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm</h1>
                <div>
                    <img className='homeLogoTitle' src={LogoTitle} alt='j logo' />
                    <h1>ohnny</h1>
                </div>
                <br />
                <h1>Frontend Developer</h1>
                <Link to="/contact" className={'flat-button'}>Contact Me</Link>
            </div>
        </div>
    )
}

export default Home
