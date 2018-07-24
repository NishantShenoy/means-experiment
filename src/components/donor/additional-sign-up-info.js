import React from 'react'
import {DonorSignInContext} from './donor-context-provider';
import {Redirect} from 'react-router-dom'
import Error from './error'

export default class DonorAdditionalSignInInfo extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {

        }
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
                                    <input type="text" className="form-control" placeholder="Example EIN: LIN312342122" onChange={context.handleEINChange} required />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label for="inputEmail4">Credit Card Number</label>
                                        <input type="text" className="form-control" id="inputEmail4" placeholder="Email" onChange={context.handleCCNumberChange} required/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="inputPassword4">CVV</label>
                                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password" onChange={context.handleCVVChange} required/>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={context.validateEIN}>Sign Up</button>
                                {context.state.isValidatedEIN ? 
                                    (<Redirect to="/donate-food-form" />): (<Error />)                     
                                }
                            </form>
                        </React.Fragment>
                    )}
                </DonorSignInContext.Consumer>
            </form>
        )
    }
}