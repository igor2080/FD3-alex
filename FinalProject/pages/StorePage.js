import React from 'react';
import StoreComponent from '../components/StoreComponent';
import StoreItem from '../components/StoreItem';
import { NavLink, Link } from 'react-router-dom';


var itemsArray = require('../SampleItems.json');

class StorePage extends React.PureComponent {

    state = {
        currentPageNumber: !isNaN(this.props.match.params.page) ? parseInt(this.props.match.params.page) : 1,
        itemsArray: itemsArray.map(item => Object.assign(new StoreItem(), item))
    }

    toPreviousPage = () => {
        this.setState((curState, props) => {
            return {
                currentPageNumber: (curState.currentPageNumber - 1),
                itemsArray: [...curState.itemsArray]
            }
        });
    }

    render() {

        console.log("parameter: " + this.props.match.params.page + " page: " + this.state.currentPageNumber);

        var from = (50 * this.state.currentPageNumber) - 49;
        var to = (50 * this.state.currentPageNumber);
        var maxPages = Math.ceil(this.state.itemsArray.length / 50);

        console.log("from:" + from + " to:" + to + ", max pages: " + maxPages);

        var renderItemsArray = this.state.itemsArray.filter(item => item.itemId >= from && item.itemId < to);
        
        console.log(renderItemsArray);

        return (
            <div>
                 <button onClick={this.toPreviousPage} disabled={this.state.currentPageNumber <2}>← Previous page</button>
                <button disabled={this.state.currentPageNumber >= maxPages}>Next page →</button>
                <StoreComponent storeItems={renderItemsArray} />
            </div>
        );
    }
}
export default StorePage;