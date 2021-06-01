import React from 'react';
import igLogo from '../assets/ig-logo.png';
import wsLogo from '../assets/ws-logo.png';

function SocialLinks() {
    return (
        <div className="App-social-links">
                  <div>
                    <a href="https://www.instagram.com/fletesorinokia/" rel="noreferrer" target="_blank" className="Ig-logo-container" >
                    <img src={igLogo} className="social-icon-logo" alt="logo" />
                    </a>
                  </div>
                  <div>
                    <a href="https://api.whatsapp.com/send?phone=56981964971&text=Hola!%20deseo%20un%20flete" rel="noreferrer" target="_blank" className="Ig-logo-container" >
                    <img src={wsLogo} className="social-icon-logo" alt="logo" />
                    </a>
              </div>
            </div>
    )
}


export default SocialLinks;
