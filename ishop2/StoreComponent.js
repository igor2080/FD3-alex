var StoreComponent = React.createClass({

    displayName: "StoreComponent",

    propTypes: {
        storeName: React.PropTypes.string,
        storeItems: React.PropTypes.arrayOf(React.PropTypes.instanceOf(StoreItem)).isRequired,
    },

    getInitialState: function () {
        return {
            localStoreItems: this.props.storeItems,
            selectedRow: '',
        };
    },

    cbItemDeleted: function (itemId) {
        this.setState({ localStoreItems: this.state.localStoreItems.filter(x => x.itemId != itemId) });
    },

    cbItemClicked: function (itemId) {
        this.setState({ selectedRow: itemId });
    },

    render: function () {
        var renderItemArray = [];
        this.state.localStoreItems.forEach(item => {
            var storeItem =
                React.createElement(ItemComponent, { key: item.itemId, storeItem: item, itemDeleted: this.cbItemDeleted, itemClicked: this.cbItemClicked, isSelected: item.itemId == this.state.selectedRow });

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