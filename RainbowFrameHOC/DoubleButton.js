import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

class DoubleButton extends React.Component {
    static propTypes = {
        caption1: PropTypes.string,
        caption2: PropTypes.string,
        cbPressed: PropTypes.func
    }

    render() {
        return (
            <Fragment>
                <input type="button" value={this.props.caption1} onClick={() => { this.props.cbPressed(this.props.caption1) }} />
                {this.props.children}
                <input type="button" value={this.props.caption2} onClick={() => { this.props.cbPressed(this.props.caption2) }}/>
            </Fragment>
        );
    }
}

export default DoubleButton;
