// Menu component
import React, {Component} from 'react';
class Menu extends Component {
    render(){
      return(
        <div>
          <h1>Menu</h1>
          < img src = "https://media.giphy.com/media/cTowyBUKrDPkA/giphy.gif" />

          <p>Check out our amazing 24/7 menu:
            <ul>
              <li>Lazy Loading</li>
              <li>Dynamic Route Matching</li>
              <li>Location Transition Handling</li>
            </ul>
          </p>
        </div>
      );
    }
  }

  export default Menu;