import React from 'react';
import '../location/location.scss';
import Mapa from '../../assets/images/mapa.png'
const Location = () => {

    return(
        <div className='location' id='location'>
            <div className='texto'>
                <h2>¿Dónde nos encontramos?</h2>
                <img className= "mapa" src={Mapa} alt="mapa"/>
            </div>
        </div>
        
    )
}

export default Location