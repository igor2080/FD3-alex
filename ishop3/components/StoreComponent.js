import React from 'react';
import PropTypes from 'prop-types';

import ItemComponent from './ItemComponent';
import StoreItem from './StoreItem';
import ItemPreview from './ItemPreview';
import ItemEdit from './ItemEdit';

class StoreComponent extends React.Component {

    static propTypes = {
        storeName: PropTypes.string,
        storeItems: PropTypes.arrayOf(PropTypes.instanceOf(StoreItem)).isRequired,
    };

    state = {
        localStoreItems: this.props.storeItems,
        selectedRow: '',
        displayMode: '',
    };

    cbItemDeleted = (itemId) => {
        if (!this.isAllowedClicking())
            return;

        this.setState((curState, props) => {
            return {
                localStoreItems: curState.localStoreItems.filter(x => x.itemId != itemId),
                selectedRow: '',
                displayMode: '',
            }
        });
    };

    cbItemClicked = (itemId) => {
        if (!this.isAllowedClicking())
            return;

        this.setState((curState, props) => {
            return {
                selectedRow: itemId,
                displayMode: 'preview',
            }
        });
    };

    cbItemEdit = (itemId) => {
        if (!this.isAllowedClicking())
            return;

        this.setState((curState, props) => {
            return {
                selectedRow: itemId,
                displayMode: 'edit',
            }
        });
    };

    cbItemEditSaveChanges = (id, item) => {
        var localItemCopy = Object.assign(this.state.localStoreItems, {});
        var itemIndex = localItemCopy.findIndex(x => x.itemId == id);

        if (this.state.displayMode == 'edit') {
            localItemCopy[itemIndex] = item;
        }
        else if (this.state.displayMode == 'create') {
            localItemCopy.push(item);
        }

        this.setState((curState, props) => {
            return {
                localStoreItems: localItemCopy
            }
        });

        this.clearDisplayMode();
    };

    createClicked = () => {
        this.setState({
            selectedRow: '',
            displayMode: 'create',
        });
    };

    cbCancelEdit = () => {
        this.clearDisplayMode();
    };

    clearDisplayMode = () => {
        this.setState((curState, props) => {
            return {
                selectedRow: '',
                displayMode: '',
            }
        });
    };

    isAllowedClicking = () => {
        return !(this.state.displayMode === 'edit' || this.state.displayMode === 'create')
    };


    render() {
        var renderItemArray = this.state.localStoreItems.map(item =>
            <ItemComponent key={item.itemId} storeItem={item} itemEdit={this.cbItemEdit} itemDeleted={this.cbItemDeleted} itemClicked={this.cbItemClicked} isSelected={item.itemId == this.state.selectedRow} isClickingDisabled={!this.isAllowedClicking()} />
        );

        var displayItemInfo;

        if (this.state.selectedRow !== '' || this.state.displayMode !== '') {
            var currentItem = this.state.localStoreItems.find(x => x.itemId === this.state.selectedRow);
            
            switch (this.state.displayMode) {
                case 'preview':
                    displayItemInfo = <ItemPreview storeItem={currentItem} />
                    break;
                case 'edit':
                    displayItemInfo = <ItemEdit
                        storeItemId={currentItem.itemId}
                        storeItemName={currentItem.itemName}
                        storeItemPrice={currentItem.itemPrice}
                        storeItemImageURL={currentItem.itemImageURL}
                        storeItemQuantity={currentItem.itemRemainingAmountStored}
                        saveChanges={this.cbItemEditSaveChanges}
                        cancelEdit={this.cbCancelEdit} />
                    break;
                case 'create':
                    console.log((this.state.localStoreItems[this.state.localStoreItems.length - 1].itemId) + 1);
                    displayItemInfo = <ItemEdit
                        storeItemId={(this.state.localStoreItems[this.state.localStoreItems.length - 1].itemId) + 1}
                        saveChanges={this.cbItemEditSaveChanges}
                        cancelEdit={this.cbCancelEdit}
                    />
                    break;
            }
        }
        else {

        }

        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>URL</th>
                            <th>Quantity</th>
                            <th colSpan="2">Control</th>
                        </tr>
                        {renderItemArray}
                    </tbody>
                </table>
                {

                    (this.state.displayMode == '' || this.state.displayMode == 'preview') ? <input type="button" onClick={this.createClicked} value="Create new item" /> : ''
                }
                {
                    displayItemInfo
                }
            </div>
        );
    };
}
export default StoreComponent;