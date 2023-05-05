import React from 'react';
import '../main/main.scss';
import mainImage from '../../assets/images/fondo-negro.jpg';
import Header from '../../components/header/header';
import Logo from '../../assets/images/logo.svg';


const Main = () => {

    function whatsapp(){
        
    }

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
                        <button className='buttons borde-expandido' onClick={() => {window.open('https://wa.link/4opo2x','_blank');console.log("clicado")}}>
                        <a href="https://www.buzzfeed.com/quizzes?page=2" target="_blank" rel="noreferrer">Contáctanos</a>
                        </button>
                    </div>
                    
                    {/* <div className="holi">
                        <button className='buttons borde-expandido'>
                        <a href="#">Carta</a>
                        </button>
                    </div> */}
                    
                </div>
                
            </div>
        </div>
        
        </div>
        
    )
}

export default Main