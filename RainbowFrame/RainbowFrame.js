import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {
    static propTypes = {
        colors: PropTypes.array
    }

    makeDivArray = (colorArray, loopCount = 1) => {
        if (colorArray.length == 0) {
            return this.props.children;
        }
        var currentColor = colorArray.shift();
        return <div style={{ border: '5px solid ' + currentColor, width: '' + (400 - (20 * loopCount)) + 'px', textAlign: 'center', margin: '5px 5px' }}>{this.makeDivArray(colorArray, ++loopCount)}</div>
    }

    render() {
        var element = this.makeDivArray(this.props.colors);
        return (
            element
        );
    }
}

export default RainbowFrame;