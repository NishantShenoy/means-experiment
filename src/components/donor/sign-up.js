import React from 'react';
import {DonorSignInContext} from './donor-context-provider';
import {Link} from 'react-router-dom';

export default class SignUp extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <form>
            <DonorSignInContext.Consumer>
                {(context) => (
                    <React.Fragment>
                        <div className="form-group">
                                <label for="orgNameInput">Organization Name</label>
                                <input type="text" className="form-control" placeholder="Example org: Microsoft Corp" onChange={context.handleOrgNameChange} required />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputEmail4">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" onChange={context.handleDonorEmailChange} required/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputPassword4">Password</label>
                                    <input type="password" className="form-control" id="inputPassword4" placeholder="Password" onChange={context.handlePasswordChange} required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputAddress">Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={context.handleAddressLine1Change} required/>
                            </div>
                            <div className="form-group">
                                <label for="inputAddress2">Address 2</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" onChange={context.handleAddressLine2Change} />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputCity">City</label>
                                    <input type="text" className="form-control" id="inputCity" onChange={context.handleCityChange} required/>
                                </div>
                                <div className="form-group col-md-4">
                                    <label for="inputState">State</label>
                                    <select id="inputState" className="form-control" >
                                        <option selected>WA</option>
                                        <option>OR</option>
                                        <option>CA</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <label for="inputZip">Zip</label>
                                    <input type="text" className="form-control" id="inputZip" onChange={context.handleZipChange} required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck" onChange={context.handleIsNonProfitChange} required/>
                                    <label className="form-check-label" for="gridCheck">
                                        Are you a non profit?
                                    </label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary"><Link to="/additional-signin-info">Continue</Link></button>
                    </React.Fragment>
                )}
            </DonorSignInContext.Consumer>
        </form>
        )
    }
}