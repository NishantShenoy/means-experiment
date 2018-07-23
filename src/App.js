import React, { Component } from 'react';
import {Link, Switch, Route, BrowserRouter} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Details from '../src/components/details';
import Home from '../src/components/home';
import Donor from '../src/components/donor';
import Recepient from '../src/components/recepient';

class App extends Component {
  render() {  
    return (      
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Means Database routes</h1>
        </header>
        <p className="App-intro">
          <BrowserRouter>
            <div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/donor-flow">Donor flow</Link></li>
                <li><Link to="/recepient-flow">Recepient flow</Link></li>
                <li><Link to="/details-page">Details page</Link></li>
              </ul>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/donor-flow" component={Donor} />
                <Route exact path="/recepient-flow" component={Recepient} />
                <Route exact path="/details-page" component={Details} />
              </Switch>
            </div>
          </BrowserRouter>
        </p>
      </div>
    );
  }
}

export default App;