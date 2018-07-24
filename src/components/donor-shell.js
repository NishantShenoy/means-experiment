import React from 'react';
import MyDonorContextProvider from './donor/donor-context-provider';
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
            this.props.isKnownDonor = true;
        }
    }

    render() {
        return (
            <div>
                <MyDonorContextProvider>
                     {/* Figure out if the person already has an account, if yes, sign-in else sign-up */}
                    {this.state.isKnownDonor ? 
                        (<SignIn />) :
                        (<SignUp />)
                    }     
                </MyDonorContextProvider>
            </div>
        )
    }
}