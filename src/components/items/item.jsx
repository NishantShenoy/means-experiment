import React from 'react';

class Item extends React.Component {    
    render() {
        var callToAction = "SignUp to Claim";
        var targetUrl = "/users/sign_up?context=recepient";
        if(this.props.authorizedToClaim) {
            if(this.props.donationInfo.status === "claimed" || this.props.donationInfo.status === "expired") {
                return null;
            } else {
                callToAction = "Claim It";
                targetUrl = this.props.donationInfo.url;
            }
        } else {
            if(this.props.donationInfo.status === "claimed" || this.props.donationInfo.status === "expired") {
                callToAction = "Signup for future notifications";
            } else {
                callToAction = "Signup to claim";
            }
        }

        return (
            <div className='list-group-item active'>
                <div class="thumbnail">
                    <img src={this.props.donationInfo.item_image} className="img-fluid" alt=""/>
                    <div class="caption">
                        <h3 className="list-group-item-text">{this.props.donationInfo.title} 
                            <span className="badge badge-secondary">{this.props.donationInfo.status}</span>
                        </h3>
                        <p>
                            <a className='btn btn-primary' href={targetUrl}>{callToAction}</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item;