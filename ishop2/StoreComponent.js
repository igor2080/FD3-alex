var StoreComponent = React.createClass({

    displayName: "StoreComponent",

    propTypes: {
        storeName: React.PropTypes.string,
        storeItems: React.PropTypes.arrayOf(React.PropTypes.instanceOf(StoreItem)).isRequired,
    },

    getInitialState: function () {
        return {
            localStoreItems: this.props.storeItems,
            selectedRowName: '',
        };
    },

    cbItemDeleted: function (itemName) {
        this.setState((curState, props) => {
            curState.localStoreItems = curState.localStoreItems.filter(x => x.itemName != itemName);
        });
    },

    cbItemClicked: function (itemName) {
        this.setState((curState, props) => {
            curState.selectedRowName = itemName;
        });
    },

    render: function () {
        var renderItemArray = [];
        this.state.localStoreItems.forEach(item => {
            var storeItem =
                React.createElement(ItemComponent, { key: item.itemName, storeItem: item, itemDeleted: this.cbItemDeleted, itemClicked: this.cbItemClicked, isSelected: item.itemName == this.state.selectedRowName });

            renderItemArray.push(storeItem);
        });

        return React.DOM.table({ className: 'StoreTable' },
            React.DOM.tbody({},
                React.DOM.tr({},
                    React.DOM.th({}, 'Name'),
                    React.DOM.th({}, 'Price'),
                    React.DOM.th({}, 'URL'),
                    React.DOM.th({}, 'Quantity'),
                    React.DOM.th({}, 'Control'),
                ),
                renderItemArray,
            ));
    }
});