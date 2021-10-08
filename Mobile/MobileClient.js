import React from 'react';
import PropTypes from 'prop-types';

import { mobileEvents } from './events';


class MobileClient extends React.PureComponent {
    static propTypes = {
        client: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            balance: PropTypes.number,
            status: PropTypes.string,
            
        }),
        isClickingDisabled: PropTypes.bool,
    }

    state = {
        client: this.props.client
    };

    deleteClicked = () => {
        mobileEvents.emit('deleteClick', this.state.client.id);
    };

    editClicked = () => {
        mobileEvents.emit('displayModeChanged', 'edit', this.state.client);
        mobileEvents.emit('editClick', this.state.client.id);
    }

    render() {
        console.log("MobileClient " + this.props.client.id + " render");
        return (
            <tr>
                <td>{this.props.client.name}</td>
                <td>{this.state.client.balance}</td>
                <td className={this.state.client.status === "active" ? "active" : "blocked"}>{this.state.client.status}</td>
                <td>
                    <button disabled={this.props.isClickingDisabled} onClick={this.editClicked}>Edit</button>
                </td>
                <td>
                    <button disabled={this.props.isClickingDisabled} onClick={this.deleteClicked}>Delete</button>
                </td>
            </tr>
        );
    }
}

export default MobileClient;