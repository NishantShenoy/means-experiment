import React, { Component } from 'react'
import {Link, Switch, Route, BrowserRouter} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Details from './components/details';
import Home from './components/home';
import DonorShell from './components/donor-shell';
import Recepient from './components/recepient';
import DonorAdditionalSignInInfo from './components/donor/additional-sign-up-info';
import DonationForm from './components/donor/donation-form';
import MyDonorContextProvider from './components/donor/donor-context-provider';

class App extends Component {
  render() {  
    return (      
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossOrigin="anonymous" />
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossOrigin="anonymous"></script>
        <header className="App-header">
          <h1 className="App-title">Means Database routes</h1>
        </header>
        <p className="App-intro">
          <MyDonorContextProvider>
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
                  <Route exact path="/donate-food-form" component={DonationForm} />
                </Switch>
              </div>
            </BrowserRouter>
          </MyDonorContextProvider>
        </p>
      </div>
    );
  }
}

export default App;