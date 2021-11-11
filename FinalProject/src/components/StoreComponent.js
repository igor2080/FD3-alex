import React, { Fragment } from 'react';
import PropTypes, { func } from 'prop-types';

import ItemComponent from './ItemComponent';
import StoreItem from './StoreItem';
import { storeEvents } from './events';
import { CSSTransitionGroup } from 'react-transition-group';

import './StoreComponent.css';

class StoreComponent extends React.Component {

    static propTypes = {
        storeItems: PropTypes.arrayOf(PropTypes.instanceOf(StoreItem)).isRequired,
    };

    state = {
        localStoreItems: this.props.storeItems,
        loading: true,
    };

    componentDidMount = () => {
        storeEvents.addListener('deleteClicked', this.deleteItem);
        storeEvents.addListener('dataReady', this.onDataChange);
    }

    componentWillUnmount = () => {
        storeEvents.removeListener('deleteClicked', this.deleteItem);
        storeEvents.removeListener('dataReady', this.onDataChange);
    }

    deleteItem = (itemId) => {
        var storeitems = this.state.localStoreItems.filter(x => x.itemId != itemId);
        this.setState({ localStoreItems: storeitems });
    }

    textChanged = (element) => {
        this.setState({
            localStoreItems: this.props.storeItems.filter(item => item.itemName.includes(element.target.value)),
        });
    }

    saveToLocalStorage = () => {
        localStorage.setItem("itemArray", JSON.stringify(this.state.localStoreItems));
    }

    resetLocalStorage = () => {
        localStorage.removeItem("itemArray");
        window.location.reload();
    }

    onDataChange = () => {
        this.setState({ localStoreItems: this.props.storeItems, loading: false });
    }

    render() {
        var storeItemArray = this.state.localStoreItems.map(item =>
            <ItemComponent key={item.itemId} storeItem={item} />
        );
        return (
            <div>
                <label htmlFor="filterTextBox" >Filter: </label>
                <input id="filterTextBox" type="text" onChange={this.textChanged} />
                <button onClick={this.saveToLocalStorage}>Save to local storage</button>
                <button onClick={this.resetLocalStorage}>Reset local storage</button>
                <div className={this.state.loading ? "box" : "boxhide"}>
                    <div className="loader"></div>
                </div>
                <div className="flexdiv">
                    <CSSTransitionGroup transitionName="main" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                        {storeItemArray}
                    </CSSTransitionGroup>
                </div>
            </div>
        );
    };
}
export default StoreComponent;