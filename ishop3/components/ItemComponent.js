import React from 'react';
import PropTypes from 'prop-types';

import StoreItem from './StoreItem';

class ItemComponent extends React.Component {

    static propTypes = {
        storeItem: PropTypes.instanceOf(StoreItem).isRequired,
        itemDeleted: PropTypes.func,
        itemEdit: PropTypes.func,
        itemClicked: PropTypes.func,
        isClickingDisabled: PropTypes.bool,
        isSelected: PropTypes.bool,
    };

    deleteClicked = (event) => {
        event.stopPropagation();
        this.props.itemDeleted(this.props.storeItem.itemId);
    };

    editClicked = (event) => {
        event.stopPropagation();
        this.props.itemEdit(this.props.storeItem.itemId);
    };

    rowClicked = () => {
        this.props.itemClicked(this.props.storeItem.itemId);
    };

    render() {
        return (
            <tr className={this.props.isSelected ? 'orangeRow' : 'whiteRow'} onClick={this.rowClicked}>
                <td>{this.props.storeItem.itemName}</td>
                <td>{this.props.storeItem.itemPrice}</td>
                <td>{this.props.storeItem.itemImageURL}</td>
                <td>{this.props.storeItem.itemRemainingAmountStored}</td>
                <td>
                    <input type='button' onClick={this.editClicked} value='Edit' disabled={this.props.isClickingDisabled} />
                </td>
                <td>
                    <input type='button' onClick={this.deleteClicked} value='Delete' disabled={this.props.isClickingDisabled} />
                </td>
            </tr>
        );
    };
}

export default ItemComponent;