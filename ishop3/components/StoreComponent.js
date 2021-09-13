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
        if (this.state.displayMode === 'edit')
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

        this.setState((curState, props) => {
            return {
                selectedRow: itemId,
                displayMode: 'preview',
            }
        });


    };

    cbItemEdit = (itemId) => {
        if (this.state.displayMode === 'edit')
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
        console.log(itemIndex);
        if (itemIndex != -1) {
            console.log('modify');
            console.log(item);
            localItemCopy[itemIndex] =  item;
        }
        else {
            item.itemId = localItemCopy.length;
            console.log('create');
            console.log(item);
            localItemCopy.push(item);
        }

        this.setState((curState, props) => {
            return {
                localStoreItems: localItemCopy
            }
        });

        this.clearDisplayMode();
    };

    cbItemCreate = () => {
        this.setState({
            selectedRow: '',
            displayMode: 'create',
        });
    };

    cbCancelEdit = () => {
        this.clearDisplayMode();
    };

    clearDisplayMode = () =>{
        this.setState((curState, props) => {
            return {
                selectedRow: '',
                displayMode: '',
            }
        });
    }


    render() {
        var renderItemArray = this.state.localStoreItems.map(item =>
            <ItemComponent key={item.itemId} storeItem={item} itemEdit={this.cbItemEdit} itemDeleted={this.cbItemDeleted} itemClicked={this.cbItemClicked} isSelected={item.itemId == this.state.selectedRow} />
        );

        var displayItemInfo;
        if (this.state.selectedRow !== '' || this.state.displayMode !== '') {
            switch (this.state.displayMode) {
                case 'preview':
                    displayItemInfo = <ItemPreview storeItem={this.state.localStoreItems.find(x => x.itemId === this.state.selectedRow)} />
                    break;
                case 'edit':
                    displayItemInfo = <ItemEdit storeItem={this.state.localStoreItems.find(x => x.itemId === this.state.selectedRow)} saveChanges={this.cbItemEditSaveChanges} cancelEdit={this.cbCancelEdit} />
                    break;
            }
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
                    displayItemInfo
                }
            </div>
        );
    };
}
export default StoreComponent;