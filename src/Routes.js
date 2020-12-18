import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import AboutPage from './components/AboutPage';
import NavBarPage from './NavBarPage';
import UnrelatedLinks from './components/UnrelatedLinks';
class Routes extends Component{
    render(){
        return(
                <Router>
                    <NavBarPage />
                    <div>
                    <hr/>
                    <Route name="Home" exact path="/" component={HomePage} />
                    <Route name="Menu" path="/menu" component={MenuPage} />
                    <Route name="About" path="/about" component={AboutPage} />
                    <Route name="Unrelated Links" path="/unrelatedlinks" component={UnrelatedLinks} />
                    </div>
                </Router>
        )
    }

    }

export default Routes;

