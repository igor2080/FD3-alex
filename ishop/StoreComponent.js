var StoreComponent = React.createClass({

    displayName: "StoreComponent",

    render: function () {
        var storeItemArray = [];
        this.props.storeItems.forEach(item => {
            var storeItem =
                React.DOM.div({ key: item.itemName, className: 'itemMainDiv' },
                    React.DOM.div({ className: 'itemImageContainer' },
                        React.DOM.img({ src: item.itemImageURL, className: 'itemImage' },)),

                    React.DOM.div(null,
                        React.DOM.span({ className: 'itemSpan' }, 'Item name: ' + item.itemName),
                        React.DOM.span({ className: 'itemSpan' }, 'Cost: ' + item.itemPrice),
                        React.DOM.span({ className: 'itemSpan' }, 'Quantity: ' + item.itemRemainingAmountStored),
                    ),
                );
            storeItemArray.push(storeItem);
        });

        return React.DOM.div({ className: 'StoreComponentMain' },
            React.DOM.h1(null, this.props.storeName),
            React.DOM.div(null, storeItemArray),
        );
    }
});