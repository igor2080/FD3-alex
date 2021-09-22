import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

class BR2JSX extends React.Component {
    static propTypes = {
        text: PropTypes.string,
    }

    render() {
        let a = this.props.text.split(/<br ?\/?>/);
        return (
            <div style={{ backgroundColor: '#2F4F4F', display: 'inline-block', width: '300px', textAlign: 'center', color: 'white', fontSize: '18px' }}>
                {
                    a
                }
            </div>
        );
    }
}

export default BR2JSX;