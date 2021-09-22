import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

class BR2JSX extends React.Component {
    static propTypes = {
        text: PropTypes.string,
    }

    render() {
        let splitArray = this.props.text.split(/<br ?\/?>/);
        let arrayWithBreaks = splitArray.map(x => [x, <br />]).flat();
        arrayWithBreaks.pop();//remove last br
        return (
            <div style={{ backgroundColor: '#2F4F4F', display: 'inline-block', width: '300px', textAlign: 'center', color: 'white', fontSize: '18px' }}>
                {
                    arrayWithBreaks
                }
            </div>
        );
    }
}

export default BR2JSX;