import React from 'react';
import SignUp  from './donor/sign-up';
import SignIn  from './donor/sign-in';

export default class DonorShell extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            isKnownDonor : false
        };
        this.isKnownDonor = this.isKnownDonor.bind(this);
    }

    isKnownDonor = (uidCookie) => {
        if(uidCookie) {
            this.props.isKnownDonor = false;
        }
    }

    render() {
        return (
            <div>
                     {/* Figure out if the person already has an account, if yes, sign-in else sign-up */}
                    {this.state.isKnownDonor ? 
                        (<SignIn />) :
                        (<SignUp />)
                    }    
            </div>
        )
    }
}