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
        displayMode: PropTypes.string
    }

    deleteClicked = () => {
        mobileEvents.emit('deleteClick', this.props.client.id);
    };

    editClicked = () => {
        mobileEvents.emit('displayModeChanged', 'edit', this.props.client);
    }

    render() {
        console.log("MobileClient " + this.props.client.id + " render");

        return (
            <tr>
                <td>{this.props.client.name}</td>
                <td>{this.props.client.balance}</td>
                <td className={this.props.client.status === "active" ? "active" : "blocked"}>{this.props.client.status}</td>
                <td>
                    <button onClick={this.editClicked}>Edit</button>
                </td>
                <td>
                    <button onClick={this.deleteClicked}>Delete</button>
                </td>
            </tr>
        );
    }
}

export default MobileClient;