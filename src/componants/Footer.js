import '../styles/Footer.css'
import logo2 from '../assets/Footer.svg'

function Footer() { 
    return(
        <div className='kasa-footer'>
            <img src={logo2} alt='Kasa Logo' />
            <p>
                © 2020 Kasa. All rights reserved
            </p>
        </div>
    )
}
export default Footer