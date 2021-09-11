import React from 'react';
import PropTypes from 'prop-types';

import StoreItem from './StoreItem';

class ItemComponent extends React.Component {

    static propTypes = {
        storeItem: PropTypes.instanceOf(StoreItem).isRequired,
        itemDeleted: PropTypes.func,
        editClicked: PropTypes.func,
        itemClicked: PropTypes.func,
        isSelected: PropTypes.bool
    };

    state = {

    };

    deleteClicked = () => {
        this.props.itemDeleted(this.props.storeItem.itemId);

    };

    editClicked = () => {
        this.props.editClicked(this.props.storeItem.itemId);
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
                    <input type='button' onClick={this.editClicked} value='Edit' />
                </td>
                <td>
                    <input type='button' onClick={this.deleteClicked} value='Delete' />
                </td>
            </tr>
        );
    };
}

export default ItemComponent;

// var ItemComponent = React.createClass({
//     displayName: "ItemComponent",

//     propTypes: {
//         storeItem: React.PropTypes.instanceOf(StoreItem).isRequired,
//         itemDeleted: React.PropTypes.func,
//         itemClicked: React.PropTypes.func,
//         isSelected: React.PropTypes.bool
//     },

//     deleteClicked: function () {
//         this.props.itemDeleted(this.props.storeItem.itemId);
//     },

//     rowClicked: function () {
//         this.props.itemClicked(this.props.storeItem.itemId);
//     },

//     render: function () {
//         return React.DOM.tr({ className: this.props.isSelected ? 'orangeRow' : 'whiteRow', onClick: this.rowClicked },
//             React.DOM.td({}, this.props.storeItem.itemName),
//             React.DOM.td({}, this.props.storeItem.itemPrice),
//             React.DOM.td({}, this.props.storeItem.itemImageURL),
//             React.DOM.td({}, this.props.storeItem.itemRemainingAmountStored),
//             React.DOM.td({},
//                 React.DOM.input({ type: 'button', onClick: this.deleteClicked, value: 'Delete' })),
//         );
//     },
// });