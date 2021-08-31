var ItemComponent = React.createClass({
    displayName: "ItemComponent",

    propTypes: {
        storeItem: React.PropTypes.instanceOf(StoreItem).isRequired,
        itemDeleted: React.PropTypes.func,
        itemClicked: React.PropTypes.func,
        isSelected: React.PropTypes.bool
    },

    deleteClicked: function () {
        this.props.itemDeleted(this.props.storeItem.itemName);
    },

    rowClicked: function () {
        this.props.itemClicked(this.props.storeItem.itemName);
    },

    render: function () {
        return React.DOM.tr({ className: this.props.isSelected ? 'orangeRow' : 'whiteRow', onClick: this.rowClicked },
            React.DOM.td({}, this.props.storeItem.itemName),
            React.DOM.td({}, this.props.storeItem.itemPrice),
            React.DOM.td({}, this.props.storeItem.itemImageURL),
            React.DOM.td({}, this.props.storeItem.itemRemainingAmountStored),
            React.DOM.td({},
                React.DOM.input({ type: 'button', onClick: this.deleteClicked, value: 'Delete' })),
        );
    },
});