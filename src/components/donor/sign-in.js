import React from 'react'
import {DonorSignInContext} from './donor-context-provider';
import {Redirect} from 'react-router-dom';
import Error from '../donor/error';

export default class SignIn extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email : '',
            password : ''
        }

        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.restoreUnchangedStateVariables = this.restoreUnchangedStateVariables.bind(this);
    }

    setEmail = (event) => {
        if (event) {
            let newStateVariable = {email: event.target.value};
            this.restoreUnchangedStateVariables(this.state, newStateVariable)
        }
    }
    setPassword = (event) => {
        if (event) {
            let newStateVariable = {password: event.target.value};
            this.restoreUnchangedStateVariables(this.state, newStateVariable)
        }
    }
    restoreUnchangedStateVariables = (previousState, newStateVariable) => {
        this.state = {...previousState, ...newStateVariable};
    }


    render() {
        return (
            <DonorSignInContext.Consumer>
            { (context) => (
                <React.Fragment>
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.setEmail}/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                            <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.setPassword}/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={context.validateEmail(this.state)}>Sign in</button>
                    </form>
                    {context.state.isValidatedEmail ? 
                        (<Redirect to="/donate-food-form" />): (<Error />)                     
                    }
                </React.Fragment>
            )}
            </DonorSignInContext.Consumer>
        )
    }
}