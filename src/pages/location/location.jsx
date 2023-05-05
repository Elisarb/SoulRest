import React from 'react';
import '../location/location.scss';
import Mapa from '../../assets/images/location.jpg'
const Location = () => {

    return(
        <div className='location' id='location'>
            <div className='texto'>
                <h2>¿Dónde nos encontramos?</h2>
                <img className= "mapa" src={Mapa} alt="mapa"/>
                <h3>Costanilla de los Ángeles, 16</h3>
            </div>
        </div>
        
    )
}

export default Location