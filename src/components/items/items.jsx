import React from 'react';
import Donations from '../../mocks/items.json';
import Item from './item';

class Items extends React.Component {
    defaults = {
        authorizedToClaim: false
    }

    render() {
        return (
            <div className='list-group'>
            {[
                ...Donations.map((donation) => 
                    (<Item donationInfo={donation} authorizedToClaim={this.defaults.authorizedToClaim}/>)            
                )
            ]}
            </div>
        );
    }
}
export default Items;