import React from 'react';
import '../main/main.scss';
import mainImage from '../../assets/images/fondo-negro.jpg';
import Header from '../../components/header/header';
import Logo from '../../assets/images/logo.svg';


const Main = () => {

    return(
        <div>
        <div className='main'>
            <img src={mainImage} className= 'main-image' alt = 'main logo'/>
            <Header></Header>

            <div className="main-introduction">
                <div className="title">
                    <img src={Logo} alt="" className="logo"/>
                    <h1 className="main-title">SOUL</h1>
                    <h2 className="main-subtitle">-RESTAURANT-</h2>
                </div>
                
                <div className='buttons-container'>
                    <div className="holi">
                        <button className='buttons borde-expandido' handleClick="">
                        <a href="#">Contáctanos</a>
                        </button>
                    </div>
                    
                    <div className="holi">
                        <button className='buttons borde-expandido'>
                        <a href="#">Reserva Ya</a>
                        </button>
                    </div>
                    
                </div>
                
            </div>
        </div>
        
        </div>
        
    )
}

export default Main