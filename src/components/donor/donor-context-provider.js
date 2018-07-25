import React from 'react'

export const DonorSignInContext = React.createContext();

class MyDonorContextProvider extends React.Component {
    
    state = {
        organizationName:'',
        donorEmail: '',
        password: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: 'WA',
        zip: '',
        isNonProfit: false,
        EIN:'',
        isValidatedEmail: false,
        isValidatedEIN: false,
        isValidEIN: false,
        CreditCardNumber: '',
        CVV:'',
        donationDetails: {
            title: '',
            description: '',
            autoFoodClassifications: [],
            additionalFoodClassifications: [],
            pickupLocation: '',
            foodExpiry: '',
            fairMarketValue: '',
            donationGrossWeight: ''
        }
    }


    constructor(props) {
        super(props)
        this.state = {
            organizationName:'',
            donorEmail: '',
            password: '',
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: 'WA',
            zip: '',
            isNonProfit: false,
            EIN:'',
            isValidatedEmail: false,
            isValidatedEIN: false,
            isValidEIN: false,
            CreditCardNumber: '',
            CVV:'',
            donationDetails: {
                title: '',
                description: '',
                autoFoodClassifications: [],
                additionalFoodClassifications: [],
                pickupLocation: '',
                foodExpiry: '',
                fairMarketValue: '',
                donationGrossWeight: ''
            }
        }
    }
    
    render(){
        var self=this;
        return(
            <DonorSignInContext.Provider value = {{
                state: this.state,
                handleOrgNameChange : (event) => {
                    let newState = Object.assign(self.state, {organizationName: event.target.value});
                    self.setState(newState);
                },
                handleDonorEmailChange : (event) => {
                    let newState = Object.assign(self.state, {donorEmail: event.target.value});
                    self.setState(newState)
                },
                handlePasswordChange : (event) => {
                    let newState = Object.assign(self.state, {password: event.target.value});
                    self.setState(newState)
                },
                handleAddressLine1Change : (event) => {
                    let newState = Object.assign(self.state,  {password: event.target.value});
                    self.setState(newState)
                },
                handleAddressLine2Change : (event) => {
                    let newState = Object.assign(self.state,  {addressLine2: event.target.value});
                    self.setState(newState)
                },
                handleStateChange : (event) => {
                    let newState = Object.assign(self.state,   {state: event.target.value});
                    self.setState(newState)
                },
                handleStateChange : (event) => {
                    let newState = Object.assign(self.state, {city: event.target.value});
                    self.setState(newState)
                },
                handleZipChange : (event) => {
                    let newState = Object.assign(self.state,   {zip: event.target.value});
                    self.setState(newState)
                },
                handleIsNonProfitChange : (event) => {
                    let newState = Object.assign(self.state,   {isNonProfit: event.target.value});
                    self.setState(newState)
                },
                handleEINChange : (EIN) => {
                    let newState = Object.assign(self.state,   {EIN: EIN});
                    self.setState(newState)
                },
                handleCCNumberChange : (CCNumber) => {
                    let newState = Object.assign(self.state,   {CreditCardNumber: CCNumber});
                    self.setState(newState)
                },
                handleCVVChange :  (CVV) => {
                    let newState = Object.assign(self.state,  {CVV: CVV});
                    self.setState(newState)
                },
                validateEIN :(EIN) => {
                    if (EIN) {
                        //verify creds
                        self.state.isValidatedEIN = true;
                        self.state.isValidEIN = true;
                        return true;
                    }
                },
                validateEmail:  (creds) => {
                    if (creds) {
                        //verify creds
                        self.state.isValidatedEmail = true;
                    }
                },
                setDonationDetails: (donation) => {
                    if(donation) {
                        self.state.donationDetails = donation;
                    }
                }
            }}>
            {self.props.children}
            </DonorSignInContext.Provider>
        )
    }
}


export default MyDonorContextProvider