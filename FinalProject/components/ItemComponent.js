import React from 'react';
import PropTypes from 'prop-types';
import StoreItem from './StoreItem';
import { storeEvents } from './events';

class ItemComponent extends React.Component {

    static propTypes = {
        storeItem: PropTypes.instanceOf(StoreItem).isRequired
    };

    editClicked = function () {
        storeEvents.emit('editClicked', this.props.storeItem.itemId);
    }

    deleteClicked = () => {
        storeEvents.emit('deleteClicked', this.props.storeItem.itemId);
    }

    render() {
        return (
            <tr>
                <td>{this.props.storeItem.itemName}</td>
                <td>{this.props.storeItem.itemPrice}</td>
                <td>
                    <input type='button' onClick={this.deleteClicked} value='Delete' />
                </td>
            </tr>
        );
    };
}

export default ItemComponent;