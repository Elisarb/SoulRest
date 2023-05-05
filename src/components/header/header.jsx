import React from 'react';
import '../header/header.scss';
import burger from "../../assets/images/burger.svg";


const Header = () => {

    function myFunction() {   
        //Añade una clase al elemento que tenga el id myDropdown
        document.getElementById("myDropdown").classList.toggle("show");
      }

      function activateMenu(){
        let nav = document.querySelector('#myDropdown');

        if(nav.classList.contains("show") === false ){
            nav.classList.add("show");
            
        }else if(nav.classList.contains("show") === true ){
          nav.classList.remove("show");
      }
    }
      

    return(
        <div className="header">
            
            <nav className="nav-header">
            <div className="logo-nav">
                <h1 className='logo-nav-title'>SOUL</h1>
                <h5 className='logo-nav-subtitle'>-RESTAURANT-</h5>
            </div>

                <a href="#about" className="header-links">¿Quiénes somos?
                </a>
                <a href="#location" className="header-links">¿Dónde encontrarnos?</a>
                <a href="#gallery" className="header-links">#SomosSOUL</a>
                <div>
                    
                    <div class="dropdown">
                        <button onClick={activateMenu} class="drop-button">
                            <img src={burger} className= "burger-menu" alt="burger-menu"/>
                        </button>
                        <div id="myDropdown" class="dropdown-content">
                            <h4>Síguenos en:</h4>
                            <a href="https://www.instagram.com/soulmadridrest/?igshid=YmMyMTA2M2Y%3D" target="_blank">Instagram</a>
                            <a href="https://www.tiktok.com/@soulmadrid?_t=8c4c6kSBlDG&_r=1" target="_blank">Tik Tok</a>
                            {/* <a href="#">Link 3</a> */}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        
    )
}

export default Header