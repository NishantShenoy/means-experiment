import React, { Component } from 'react'
import {Link, Switch, Route, BrowserRouter} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Details from './components/details';
import Home from './components/home';
import DonorShell from './components/donor-shell';
import Recepient from './components/recepient';
import DonorAdditionalSignInInfo from './components/donor/additional-sign-up-info';
import Donation from './components/donor/donation';

class App extends Component {
  render() {  
    return (      
      <div className="App">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B" crossOrigin="anonymous" />
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js" integrity="sha384-o+RDsa0aLu++PJvFqy8fFScvbHFLtbvScb8AjopnFD+iEQ7wo/CG0xlczd+2O/em" crossOrigin="anonymous"></script>
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
                <Route exact path="/donor-flow" component={DonorShell} />
                <Route exact path="/recepient-flow" component={Recepient} />
                <Route exact path="/details-page" component={Details} />
                <Route exact path="/additional-signin-info" component={DonorAdditionalSignInInfo} />
                <Route exact path="/donate-food-form" component={Donation} />
              </Switch>
            </div>
          </BrowserRouter>
        </p>
      </div>
    );
  }
}

export default App;