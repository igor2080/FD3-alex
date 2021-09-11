import React from 'react';
import PropTypes from 'prop-types';

import ItemComponent from './ItemComponent';
import StoreItem from './StoreItem';

class ItemPreview extends React.Component {

    static propTypes = {
        storeItem: PropTypes.instanceOf(StoreItem).isRequired,

    }

    render(){
        return(
            <div>
                <div>'Item ID: {this.props.storeItem.itemId}'</div>
                <h3>{this.props.storeItem.itemName}</h3>
                <div>'Price: {this.props.storeItem.itemPrice}'</div>
                <div>'Remaining quantity: {this.props.storeItem.itemPrice}'</div>
                <img src={this.props.itemImageURL}></img>
            </div>
        );
    }

}

export default ItemPreview;