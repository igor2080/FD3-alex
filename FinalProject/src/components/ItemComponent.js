import React from 'react';
import PropTypes from 'prop-types';
import StoreItem from './StoreItem';
import { storeEvents } from './events';

class ItemComponent extends React.Component {

    static propTypes = {
        storeItem: PropTypes.instanceOf(StoreItem).isRequired
    };

    deleteClicked = () => {
        storeEvents.emit('deleteClicked', this.props.storeItem.itemId);
    }

    render() {
        return (
            <div className="flexitem">
                <span>{this.props.storeItem.itemName}</span>
                <span>{this.props.storeItem.itemPrice}</span>
                <input type='button' onClick={this.deleteClicked} value='Delete' />
            </div>           
        );
    };
}

export default ItemComponent;