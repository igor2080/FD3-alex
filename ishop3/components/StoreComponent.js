import React from 'react';
import PropTypes from 'prop-types';

import ItemComponent from './ItemComponent';
import StoreItem from './StoreItem';
import ItemPreview from './ItemPreview';

class StoreComponent extends React.Component {

    static propTypes = {
        storeName: PropTypes.string,
        storeItems: PropTypes.arrayOf(PropTypes.instanceOf(StoreItem)).isRequired
    };

    state = {
        localStoreItems: this.props.storeItems,
        selectedRow: ''
    };

    cbItemDeleted = (itemId) => {
        this.setState((curState, props) => {
            curState.localStoreItems = curState.localStoreItems.filter(x => x.itemId != itemId);
            curState.selectedRow = ''
        });
    };

    cbItemClicked = (itemId) => {
        this.setState({ selectedRow: itemId });
    };

    cbItemEdit = (itemId) => {

    }

    render() {
        var renderItemArray = this.state.localStoreItems.map(item =>
            <ItemComponent key={item.itemId} storeItem={item} itemEdit={this.cbItemEdit} itemDeleted={this.cbItemDeleted} itemClicked={this.cbItemClicked} isSelected={item.itemId == this.state.selectedRow} />
        );

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
                    console.log(this.state.selectedRow)
                }
                {
                    (this.state.selectedRow !== '') &&
                    <ItemPreview storeItem={this.state.localStoreItems.find(x => x.itemId === this.state.selectedRow)} />

                }
            </div>
        );
    };
}
export default StoreComponent;


// var StoreComponent = React.createClass({

//     displayName: "StoreComponent",

//     propTypes: {
//         storeName: React.PropTypes.string,
//         storeItems: React.PropTypes.arrayOf(React.PropTypes.instanceOf(StoreItem)).isRequired,
//     },

//     getInitialState: function () {
//         return {
//             localStoreItems: this.props.storeItems,
//             selectedRow: '',
//         };
//     },

//     cbItemDeleted: function (itemId) {
//         this.setState({ localStoreItems: this.state.localStoreItems.filter(x => x.itemId != itemId) });
//     },

//     cbItemClicked: function (itemId) {
//         this.setState({ selectedRow: itemId });
//     },

//     render: function () {
//         var renderItemArray = [];
//         this.state.localStoreItems.forEach(item => {
//             var storeItem =
//                 React.createElement(ItemComponent, { key: item.itemId, storeItem: item, itemDeleted: this.cbItemDeleted, itemClicked: this.cbItemClicked, isSelected: item.itemId == this.state.selectedRow });

//             renderItemArray.push(storeItem);
//         });

//         return React.DOM.table({ className: 'StoreTable' },
//             React.DOM.tbody({},
//                 React.DOM.tr({},
//                     React.DOM.th({}, 'Name'),
//                     React.DOM.th({}, 'Price'),
//                     React.DOM.th({}, 'URL'),
//                     React.DOM.th({}, 'Quantity'),
//                     React.DOM.th({}, 'Control'),
//                 ),
//                 renderItemArray,
//             ));
//     }
// });