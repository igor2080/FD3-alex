import React, { Fragment } from 'react';


function withRainbowFrame(colorArray) {
    return (Component) => {
        return class extends React.Component {

            makeDivArray = (colors, loopCount = 1) => {
                if (colors.length == 0)
                    return <Component {...this.props} />
                var currentColor = colors.shift();
                return <div style={{ border: '5px solid ' + currentColor, width: '' + (400 - (20 * loopCount)) + 'px', textAlign: 'center', margin: '5px 5px' }}>
                    {this.makeDivArray(colors, ++loopCount)}
                </div>


            }

            render() {
                var element = this.makeDivArray(colorArray);
                return (
                    element
                );

            }
        }
    }

}

export { withRainbowFrame };

