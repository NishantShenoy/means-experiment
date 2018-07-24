import React from 'react'

export const DonorSignInContext = React.createContext();

export default class MyDonorContextProvider extends React.Component {
    
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
            CreditCardNumber: '',
            CVV:''
        }

        // this.handleInputChange = this.handleOrgNameChange.bind(this);
        // this.handleDonorEmailChange = this.handleDonorEmailChange.bind(this);
        // this.handlePasswordChange = this.handlePasswordChange.bind(this);
        // this.handleAddressLine1Change = this.handleAddressLine1Change.bind(this);
        // this.handleAddressLine2Change = this.handleAddressLine2Change.bind(this);
        // this.handleCityChange = this.handleCityChange.bind(this);
        // this.handleStateChange = this.handleStateChange.bind(this);
        // this.handleZipChange = this.handleZipChange.bind(this);
        // this.handleIsNonProfitChange = this.handleIsNonProfitChange.bind(this);
        // this.handleEINChange = this.handleEINChange.bind(this);
        // this.handleCCNumberChange = this.handleCCNumberChange.bind(this);
        // this.handleCVVChange = this.handleCVVChange.bind(this);
        // this.restoreUnchangedStateVariables = this.restoreUnchangedStateVariables.bind(this);
        // this.validateEmail = this.validateEmail.bind(this);
        // this.validateEIN = this.validateEIN.bind(this);
    }
    

    handleOrgNameChange = (event) => {
        if (event) {
            let newStateVariable = {organizationName: event.target.value};
            this.restoreUnchangedStateVariables(this.state, newStateVariable)
        }
    }
    handleDonorEmailChange = (event) => {
        if (event) {
            let newStateVariable = {donorEmail: event.target.value};
            this.restoreUnchangedStateVariables(this.state, newStateVariable)
        }
    }
    handlePasswordChange = (event) => {
        if (event) {
            let newStateVariable = {password: event.target.value};
            this.restoreUnchangedStateVariables(this.state, newStateVariable)
        }
    }
    handleAddressLine1Change = (event) => {
        if (event) {
            let newStateVariable = {addressLine1: event.target.value};
            this.restoreUnchangedStateVariables(this.state, newStateVariable)
        }
    }
    handleAddressLine2Change = (event) => {
        if (event) {
            let newStateVariable = {addressLine2: event.target.value};
            this.restoreUnchangedStateVariables(this.state, newStateVariable)
        }
    }
    handleCityChange = (event) => {
        if (event) {
            let newStateVariable = {city: event.target.value};
            this.restoreUnchangedStateVariables(this.state, newStateVariable)
        }
    }
    handleStateChange = (event) => {
        if (event) {
            let newStateVariable = {state: event.target.value};
            this.restoreUnchangedStateVariables(this.state, newStateVariable)
        }
    }
    handleZipChange = (event) => {
        if (event) {
            let newStateVariable = {zip: event.target.value};
            this.restoreUnchangedStateVariables(this.state, newStateVariable)
        }
    }
    handleIsNonProfitChange = (event) =>{
        if (event) {
            let newStateVariable = {isNonProfit: event.target.value};
            this.restoreUnchangedStateVariables(this.state, newStateVariable)
        }
    }
    handleEINChange = (event) => {
        if (event) {
            let newStateVariable = {EIN: event.target.value};
            this.restoreUnchangedStateVariables(this.state, newStateVariable)
        }
    }
    handleCCNumberChange = (event) => {
        if (event) {
            let newStateVariable = {CreditCardNumber: event.target.value};
            this.restoreUnchangedStateVariables(this.state, newStateVariable)
        }
    }
    handleCVVChange = (event) => {
        if (event) {
            let newStateVariable = {CVV: event.target.value};
            this.restoreUnchangedStateVariables(this.state, newStateVariable)
        }
    }
    validateEIN = () => {
        if (this.state.EIN) {
            //verify creds
            this.state.isValidatedEIN = true;
        }
    }
    validateEmail = (creds) => {
        if (creds) {
            //verify creds
            this.state.isValidatedEmail = true;
        }
    }

    restoreUnchangedStateVariables = (previousState, newStateVariable) => {
        this.state = {...previousState, ...newStateVariable};
    }

    render(){
        return(
            <DonorSignInContext.Provider value = {{
                state: this.state,
                handleOrgNameChange : this.handleOrgNameChange,
                handleDonorEmailChange : this.handleDonorEmailChange,
                handlePasswordChange : this.handlePasswordChange,
                handleAddressLine1Change : this.handleAddressLine1Change,
                handleAddressLine2Change : this.handleAddressLine2Change,
                handleStateChange : this.handleStateChange,
                handleZipChange : this.handleZipChange,
                handleIsNonProfitChange : this.handleIsNonProfitChange,
                handleEINChange : this.handleEINChange,
                handleCCNumberChange : this.handleCCNumberChange,
                handleCVVChange : this.handleCVVChange,
                validateEIN: this.validateEIN,
                validateEmail: this.validateEmail
            }}>
            {this.props.children}
            </DonorSignInContext.Provider>
        )
    }
}