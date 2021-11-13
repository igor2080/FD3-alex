import React from 'react';
import StoreComponent from '../components/StoreComponent';
import StoreItem from '../components/StoreItem';
import { NavLink, Link } from 'react-router-dom';
import { storeEvents } from '../components/events';

class StorePage extends React.PureComponent {
    state = {
        currentPageNumber: !isNaN(this.props.match.params.page) ? parseInt(this.props.match.params.page) : 1,
        itemsArray: [],
    }
    fakeDelay = 1000;//simulate loading times

    componentDidMount = () => {
        if (localStorage.getItem("itemArray") === null) {
            fetch('http://localhost:8080/sampleItems.json')
                .then(response => response.json())
                .then(data => this.loadData(data));
        }
        else {
            this.loadData(JSON.parse(localStorage.getItem("itemArray")));
        }
    }

    loadData = (data) => {
        var id = 0;
        this.setState({ itemsArray: data.map(item => Object.assign(new StoreItem(), item, { itemId: id++ })) });
        setTimeout(function () {//fake loading delay
            storeEvents.emit("dataReady");
        }, this.fakeDelay);

    }

    toPreviousPage = () => {
        this.setState((curState, props) => {
            return {
                currentPageNumber: (curState.currentPageNumber - 1),
            }
        });
    }

    toNextPage = () => {
        this.setState((curState, props) => {
            return {
                currentPageNumber: (curState.currentPageNumber + 1),
            }
        });
    }

    render() {
        var from = (50 * this.state.currentPageNumber) - 49;
        var to = (50 * this.state.currentPageNumber);
        var maxPages = Math.ceil(this.state.itemsArray.length / 50);
        var renderItemsArray = this.state.itemsArray.filter(item => item.itemId >= from && item.itemId <= to);
        return (
            <div>
                <NavLink to={{ pathname: "/" + this.state.currentPageNumber }} onClick={this.forceUpdate}>
                    <button onClick={this.toPreviousPage} disabled={this.state.currentPageNumber < 2}>← Previous page</button>
                </NavLink>

                <NavLink to={{ pathname: "/" + this.state.currentPageNumber }} onClick={this.forceUpdate}>
                    <button onClick={this.toNextPage} disabled={this.state.currentPageNumber >= maxPages}>Next page →</button>
                </NavLink>
                <StoreComponent storeItems={renderItemsArray} />
            </div>
        );
    }
}
export default StorePage;