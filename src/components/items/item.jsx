import React from 'react';

class Item extends React.Component {
    render() {
        return (
            <div className='list-group-item active'>
                <div class="thumbnail">
                    <img src={this.props.donationInfo.item_image} alt="No images found"/>
                    <div class="caption">
                        <h3 className="list-group-item-text">{this.props.donationInfo.title}</h3>
                        <p>{this.props.authorizedToClaim ? (
                            <a className='btn btn-primary' href={this.props.donationInfo.url}>Claim It</a>
                        ) : (
                            <a className='btn btn-primary' href='/users/sign_up?context=recepient'>SignUp to Claim</a>
                        )}</p>
                        <label>{this.props.donationInfo.status}</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item;