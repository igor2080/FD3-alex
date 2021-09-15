import React from 'react';
import PropTypes from 'prop-types';

import StoreItem from './StoreItem';

class ItemEdit extends React.Component {

    static propTypes = {
        storeItemId: PropTypes.number,
        storeItemName: PropTypes.string,
        storeItemPrice: PropTypes.number,
        storeItemImageURL: PropTypes.string,
        storeItemQuantity: PropTypes.number,
        saveChanges: PropTypes.func,
        cancelEdit: PropTypes.func,
    };

    state = {
        localStoreItem: new StoreItem(this.props.storeItemId, this.props.storeItemName, this.props.storeItemPrice, this.props.storeItemImageURL, this.props.storeItemQuantity),
        isItemNameValid: this.props.storeItemName !== undefined,
        isItemPriceValid: this.props.storeItemPrice !== undefined,
        isItemURLValid: this.props.storeItemImageURL !== undefined,
        isItemQuantityValid: this.props.storeItemQuantity !== undefined,
    };

    isValidItemName = (string) => {
        return string.trim().length > 0;
    }

    isValidHttpUrl = (string) => {
        let url;

        try {
            url = new URL(string);
        } catch (_) {
            return false;
        }

        if (url.protocol === "http:" || url.protocol === "https:") {
            return true;
        }

        return false;
    };

    itemNameChanged = (event) => {
        this.setState((curState, props) => {
            return {
                isItemNameValid: this.isValidItemName(event.target.value),
                localStoreItem: Object.assign(curState.localStoreItem, { itemName: event.target.value }),
            };
        });
    };

    itemPriceChanged = (event) => {
        this.setState((curState, props) => {
            return {
                isItemPriceValid: !isNaN(event.target.value) && event.target.value.trim().length > 0,
                localStoreItem: Object.assign(curState.localStoreItem, { itemPrice: Number(event.target.value) }),
            };
        });
    };

    itemURLChanged = (event) => {
        this.setState((curState, props) => {
            return {
                isItemURLValid: this.isValidHttpUrl(event.target.value),
                localStoreItem: Object.assign(curState.localStoreItem, { itemImageURL: event.target.value }),
            };
        });
    };

    itemQuantityChanged = (event) => {
        this.setState((curState, props) => {
            return {
                isItemQuantityValid: !isNaN(event.target.value) && event.target.value.trim().length > 0 && Number(event.target.value) >= 0,
                localStoreItem: Object.assign(curState.localStoreItem, { itemRemainingAmountStored: Number(event.target.value) }),
            }
        });
    };

    saveClicked = () => {
        if (this.state.isItemNameValid && this.state.isItemPriceValid && this.state.isItemURLValid && this.state.isItemQuantityValid) {
            this.props.saveChanges(this.state.localStoreItem.itemId, this.state.localStoreItem);
        }
    };

    cancelClicked = () => {
        this.props.cancelEdit();
    };

    render() {
        return (
            <div>
                <div>
                    <label>ID: {this.props.storeItemId}</label>
                </div>
                <div>
                    <label htmlFor="itemName">Item Name: </label>
                    <input type="text" id="itemName" defaultValue={this.props.storeItemName} onChange={this.itemNameChanged} />
                    <label className="dangerText">{this.state.isItemNameValid ? '' : 'Please enter a name. It must be a string'}</label>
                </div>
                <div>
                    <label htmlFor="itemPrice">Item Price: </label>
                    <input type="text" id="itemPrice" defaultValue={this.props.storeItemPrice} onChange={this.itemPriceChanged} />
                    <label className="dangerText">{this.state.isItemPriceValid ? '' : 'Please enter a price. It must be a number'}</label>
                </div>
                <div>
                    <label htmlFor="itemImageURL">Item Image URL: </label>
                    <input type="text" id="itemImageURL" defaultValue={this.props.storeItemImageURL} onChange={this.itemURLChanged} />
                    <label className="dangerText">{this.state.isItemURLValid ? '' : 'Please enter an image URL. It must be a URL string'}</label>
                </div>
                <div>
                    <label htmlFor="itemQuantity">Remaining item quantity: </label>
                    <input type="text" id="itemQuantity" defaultValue={this.props.storeItemQuantity} onChange={this.itemQuantityChanged} />
                    <label className="dangerText">{this.state.isItemQuantityValid ? '' : 'Please enter an amount. It must be a positive number or zero'}</label>
                </div>
                <div>
                    <input type="button" onClick={this.saveClicked} value="Save" />
                </div>
                <div>
                    <input type="button" onClick={this.cancelClicked} value="Cancel" />
                </div>
            </div>
        );
    };
}

export default ItemEdit;