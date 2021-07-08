

import Logo from '../components/home/Logo'
import Carousel from '../components/home/Carousel'
import SocialLinks from '../components/home/SocialLinks'

function About() {
  return (
    <div className="App-container">
      <Carousel />
      <div className="App">
        <div className="App-content">
          <Logo />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default About;
