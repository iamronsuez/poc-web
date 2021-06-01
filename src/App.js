
import './App.css';

import Logo from './app/Logo'
import Carousel from './app/Carousel'
import SocialLinks from './app/SocialLinks'

function App() {
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

export default App;
