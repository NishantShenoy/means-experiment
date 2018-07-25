import React from 'react'
import {DonorSignInContext} from './donor-context-provider';
import {Redirect, Link, withRouter} from 'react-router-dom'
import Error from './error'

class DonorAdditionalSignInInfo extends React.Component {
    
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            EIN: '',
            CreditCardNumber: '',
            CVV: ''
        }

        this.setCreditCard = this.setCreditCard.bind(this);
        this.setEIN = this.setEIN.bind(this);
    }

    handleRedirect = (context) => {
        var redirect = context.validateEIN(this.state.EIN);
        if (redirect) {
            this.props.history.push('/donate-food-form')
        }
    }
    
    setEIN = (event) => {
        let newState = Object.assign(this.state, {EIN: event.target.value});
        this.setState(newState);
    }

    setCreditCard = (event) => {
        let newState = Object.assign(this.state, {CreditCardNumber: event.target.value});
        this.setState(newState);
    }

    setCVV = (event) => {
        let newState = Object.assign(this.state, {CVV: event.target.value});
        this.setState(newState);
    }

    render(){
        return(
            <form>
                <DonorSignInContext.Consumer>
                    {(context) => (
                        <React.Fragment>
                            <form>
                                <div className="form-group">
                                    <label for="orgNameInput">EIN</label>
                                    <input type="text" className="form-control" placeholder="Example EIN: 12345678" onChange={this.setEIN} required />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label for="inputEmail4">Credit Card Number</label>
                                        <input type="text" className="form-control" id="inputEmail4" placeholder="Credit Card Number" onChange={this.setCreditCard} required/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="inputPassword4">CVV</label>
                                        <input type="password" className="form-control" id="inputPassword4" placeholder="CVV" onChange={this.setCVV} required/>
                                    </div>
                                </div>
                                <button className="btn btn-primary" onClick={this.handleRedirect.bind(this,context)}>Sign Up</button>
                            </form>
                        </React.Fragment>
                    )}
                </DonorSignInContext.Consumer>
            </form>
        )
    }
}

export default withRouter(DonorAdditionalSignInInfo)