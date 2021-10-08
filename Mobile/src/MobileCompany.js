import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import MobileClient from './MobileClient';
import { mobileEvents } from './events'
import deepEqual from 'deep-equal';

class MobileCompany extends React.PureComponent {

    static propTypes = {
        name: PropTypes.string,
        clients: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                balance: PropTypes.number,
                status: PropTypes.string,
            })
        ),
    };

    state = {
        name: this.props.name,
        clients: this.props.clients,
        currentCompany: this.props.name,
        displayMode: ''
    };

    clientNameRef = React.createRef();
    clientBalanceRef = React.createRef();
    currentClient = {};

    componentDidMount() {
        mobileEvents.addListener('deleteClick', this.deleteClient);
        mobileEvents.addListener('displayModeChanged', function (mode, currentClient) {
            this.setState({ displayMode: mode });
            this.currentClient = currentClient;
        }.bind(this));
        mobileEvents.addListener('editClick', this.saveClient);
    };

    componentWillUnmount() {
        mobileEvents.removeListener('deleteClick', this.deleteClient);
        mobileEvents.removeListener('editClick', this.saveClient);
        mobileEvents.removeAllListeners('displayModeChanged');

    };

    setCompanyName = (x) => {
        this.setState({ currentCompany: x.target.innerHTML });
    };

    deleteClient = (clientId) => {
        let clientArray = this.state.clients.filter(client => client.id != clientId);
        this.setState({ clients: clientArray });
    };

    filterClientList = (filterStatus) => {
        let newClients = [];

        if (filterStatus == null) {
            newClients = this.props.clients;
        }
        else {
            newClients = this.props.clients.filter(client => client.status == filterStatus);
        }

        if (deepEqual(newClients, this.state.clients)) {
            return;
        }
        else {
            this.setState({ clients: newClients });
        }
    }

    newClientClicked = () => {
        this.setState({
            displayMode: 'create'
        });
    }

    saveClient = (id = null) => {
        if (this.state.displayMode == 'create') {
            let newClient = {
                id: this.state.clients.length + 1,
                name: this.clientNameRef.current.value,
                balance: Number(this.clientBalanceRef.current.value),
                status: ((Math.random() * 2) < 1 ? 'blocked' : 'active'),
            };

            newClient.key = newClient.id;

            this.setState({
                clients: [...this.state.clients, newClient],
                displayMode: ''
            });

            this.currentClient = {};
        }

        if (this.state.displayMode == 'edit') {
            let currentClients = this.state.clients;
            let index = currentClients.findIndex(x => x.id == this.currentClient.id);

            currentClients[index] = {
                id: this.currentClient.id,
                name: this.clientNameRef.current.value,
                balance: Number(this.clientBalanceRef.current.value),
                status: ((Math.random() * 2) < 1 ? 'blocked' : 'active'),
                key: this.currentClient.key
            };

            this.setState({
                clients: [...currentClients],
                displayMode: ''
            });

            this.currentClient = {};
        }
    }

    cancelClick = () => {
        this.setState({ displayMode: '' });
        this.currentClient = {};
    }

    render() {
        console.log("MobileCompany render");
        var clients = this.state.clients.map(x =>
            <MobileClient key={x.id} client={x} />
        );

        return (
            <div>
                <div>
                    <button onClick={this.setCompanyName}>Velcom</button>
                    <button onClick={this.setCompanyName}>MTS</button>
                </div>
                <div>Company: {this.state.currentCompany}</div>
                <div>
                    <button onClick={() => this.filterClientList(null)}>All</button>
                    <button onClick={() => this.filterClientList("active")}>Active</button>
                    <button onClick={() => this.filterClientList("blocked")}>Blocked</button>
                </div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Balance</th>
                                <th>Status</th>
                                <th>Edit</th>
                                <th>Remove</th>
                            </tr>
                            {clients}
                        </tbody>
                    </table>
                    <button onClick={this.newClientClicked}>Add new client</button>
                </div>

                {this.state.displayMode == 'create' || this.state.displayMode == 'edit' ?
                    <div>
                        <label htmlFor="newName">Name: </label>
                        <input ref={this.clientNameRef} id="newName" defaultValue={this.currentClient.name} />
                        <br />
                        <label htmlFor="newBalance">Balance: </label>
                        <input ref={this.clientBalanceRef} id="newBalance" defaultValue={this.currentClient.balance} />
                        <button onClick={this.saveClient}>Save</button>
                        <button onClick={this.cancelClick}>Cancel</button>
                    </div>
                    : ''
                }


            </div>
        );
    };
}

export default MobileCompany;