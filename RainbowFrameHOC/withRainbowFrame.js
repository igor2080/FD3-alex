import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function withRainbowFrame(colorArray) {
    return function (Component) {
        function makeDivArray(Component, loopCount = 1) {
            if (colorArray.length == 0) {
                return Component;
            }
            var currentColor = colorArray.shift();
            return <div style={{ border: '5px solid ' + currentColor, width: '' + (400 - (20 * loopCount)) + 'px', textAlign: 'center', margin: '5px 5px' }}>{makeDivArray(colorArray, ++loopCount)}</div>
        }


        return props => (
            <Fragment>
                {makeDivArray(<Component{...props}></Component>)}
            </Fragment>
        );
    }
}

export { withRainbowFrame };