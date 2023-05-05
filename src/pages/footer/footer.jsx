import React from 'react';
import '../footer/footer.scss';
import Logo from '../../assets/images/logo.svg'

const Footer = () => {

    return(
        <div className='footer'>
            <div className='texto'>                
                <div className="logo-nav">
                <img className='logo' src={Logo} alt='logo'/>
                <h1 className='logo-nav-title'>SOUL</h1>
                <h5 className='logo-nav-subtitle'>-RESTAURANT-</h5>
                <p className='horarios'>Lunes-Domingo 18:00-04:30<br/>Costanilla de los Ángeles 16, 28014, Madrid</p>
            </div>
                
            </div>
        </div>
        
    )
}

export default Footer