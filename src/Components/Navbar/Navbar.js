import React, { useEffect, useState } from 'react';
import './Navbar.css';


function Navbar() {

    const [mostra, handleMostra] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", () =>{
          if(window.scrollY > 100){
            handleMostra(true);
          }else handleMostra(false);
      });
      return () => {
          window.removeEventListener("scroll");
      }
    
  }, [])

    return (
        <div className={`navbar ${mostra && "nav__preto"}`}>
            
            <img
            className="nav__logo"
             src="http://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="NETFLIX" />
            <img
            className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="AVATAR"
            />
            
        </div>
    )
}

export default Navbar;