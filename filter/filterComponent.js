var FilterComponent = React.createClass({
    propTypes: {
        stringArray: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    },

    getInitialState: function () {
        return {
            isCheckboxChecked: false,
            localStringArray: this.props.stringArray
        };
    },

    checkboxClicked: function () {
        this.setState((curState, props) => {
            return { isCheckboxChecked: !curState.isCheckboxChecked };
        });
    },

    textChanged: function (element) {
        var word = element.target.value;
        this.setState((curState, props) => {
            curState.localStringArray = this.props.stringArray.filter(x => x.includes(word));
        });
    },

    resetFilters: function () {
        this.setState((curState, props) => {
            curState.localStringArray = this.props.stringArray;
            curState.isCheckboxChecked = false;
        });

        document.querySelector('.sortCheckbox').checked = false;
        document.querySelector('.filterTextbox').value = "";
    },

    render: function () {
        var optionsArray = [];
        var wordArray = [...this.state.localStringArray];

        if (this.state.isCheckboxChecked) {
            wordArray = wordArray.sort();
        }
        else {
            wordArray = this.state.localStringArray;
        }

        wordArray.forEach(word => {
            optionsArray.push(React.DOM.option({ key: word }, word));
        });

        return React.DOM.div({ className: 'filterComponentMain' },
            React.DOM.div({},
                React.DOM.input({ className: 'sortCheckbox', type: 'checkbox', onClick: this.checkboxClicked }, null),
                React.DOM.input({ className: 'filterTextbox', type: 'text', onChange: this.textChanged }),
                React.DOM.input({ type: 'button', onClick: this.resetFilters, value: "Reset" })),
            React.DOM.div({},
                React.DOM.select({ multiple: 'multiple', className: 'selectText' }, optionsArray),
            ));
    },
});