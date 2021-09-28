import React, { Fragment } from 'react';


function withRainbowFrame(colorArray, loopCount = 1) {
    return props =>
        colorArray.length == 0 ?
            props.children :
            <div style={{ border: '5px solid ' + colorArray.shift(), width: '' + (400 - (20 * loopCount)) + 'px', textAlign: 'center', margin: '5px 5px' }}>
                {withRainbowFrame(colorArray, ++loopCount)}
            </div>
}

export { withRainbowFrame };