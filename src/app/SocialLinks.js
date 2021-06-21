import React from 'react';

const socialLinks = [
  {
    icon: require('../assets/ig-logo.png').default,
    link: 'https://www.instagram.com/fletesorinokia/'
  },
  {
    icon: require('../assets/ws-logo.png').default,
    link: 'https://api.whatsapp.com/send?phone=56981964971&text=Hola!%20deseo%20un%20flete'
  }
]

function SocialLinks() {
  return (
    <div className="App-social-links">
      {socialLinks.map(({ icon, link }) => (
        <div>
          <a href={link} rel="noreferrer" target="_blank" className="logo-container">
            <img src={icon} className="social-icon-logo" alt="logo"></img>
          </a>
        </div>))}
    </div>
  )
}


export default SocialLinks;
