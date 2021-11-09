import React from 'react';
import StoreComponent from '../components/StoreComponent';
import StoreItem from '../components/StoreItem';


var itemsArray = require('../SampleItems.json');

class StorePage extends React.PureComponent {

    render() {

        itemsArray = itemsArray.map(item => Object.assign(new StoreItem(), item));

        var pageNumber =parseInt(this.props.match.params.page);
        if (isNaN(pageNumber))
            pageNumber = 1;
        var from = (50 * pageNumber) - 49;
        var to = (50 * pageNumber);
        var maxPages = Math.ceil(itemsArray.length / 50);

        console.log("from:" + from + " to:" + to + ", max pages: " + maxPages);

        itemsArray = itemsArray.filter(item => item.itemId >= from && item.itemId < to);
        
        return (
            <div>
                <button onClick={toPreviousPage} disabled={pageNumber <= 1}>← Previous page</button>
                <button disabled={pageNumber >= maxPages}>Next page →</button>
                <StoreComponent storeItems={itemsArray} />
            </div>
        );
    }
}
export default StorePage;