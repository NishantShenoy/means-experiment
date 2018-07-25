import React, { Component } from 'react';
import {Link, Switch, Route, BrowserRouter} from 'react-router-dom'
import './App.css';
import Home from '../src/components/home';
import Donor from '../src/components/donor';
import Recepient from '../src/components/recepient';
import Items from '../src/components/items/items';

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
                <li><Link to="/items">Items List</Link></li>
              </ul>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/donor-flow" component={Donor} />
                <Route exact path="/recepient-flow" component={Recepient} />
                <Route exact path="/items" component={Items} />
              </Switch>
            </div>
          </BrowserRouter>
        </p>
      </div>
    );
  }
}

export default App;