import React from 'react';
import PropTypes, { func } from 'prop-types';

import ItemComponent from './ItemComponent';
import StoreItem from './StoreItem';
import { storeEvents } from './events';

import './StoreComponent.css';

class StoreComponent extends React.Component {

    static propTypes = {
        storeItems: PropTypes.arrayOf(PropTypes.instanceOf(StoreItem)).isRequired,
    };

    state = {
        localStoreItems: this.props.storeItems,
        selectedRow: '',
        displayMode: '',
    };

    componentDidMount = () => {
        storeEvents.addListener('deleteClicked', this.deleteItem);
    }

    componentWillUnmount = () => {
        storeEvents.removeListener('deleteClicked',this.deleteItem);    
    }

    deleteItem = (itemId) => {
        var storeitems = this.state.localStoreItems.filter(x => x.itemId != itemId);
        this.setState({ localStoreItems: storeitems });
    }

    render() {
        console.log(this.state.localStoreItems);
        var storeItemArray = this.state.localStoreItems.map(item =>
            <ItemComponent key={item.itemId} storeItem={item} />);
            
        return (
            <div className="flexdiv">{storeItemArray}</div>
            // <table>
            //     <tbody>
            //     {storeItemArray}
            //     </tbody>
            // </table>
        );
    };
}
export default StoreComponent;