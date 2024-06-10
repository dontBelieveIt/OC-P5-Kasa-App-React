import '../styles/Banner.css'
import logo from '../assets/LOGO.svg'
import cover from '../assets/Image source 1.png'

function Banner() {
    return(
        <div className='kasa-banner'>
            <div className='nav-bar'>
                <img src={logo} alt="Logo Kasa" />
                <div className='nav-btn'>
                    <button>Accueil</button>
                    <button>A propos</button>
                </div>
            </div>
            <div className='banner-cover'>
                <img src={cover} alt='Chez vous, partout et ailleurs' />
            </div>
        </div>
    )
}

export default Banner