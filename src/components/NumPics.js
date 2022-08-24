import React from 'react';
import NumberInput from 'semantic-ui-react-numberinput';

class NumPics extends React.Component {
    state = { value: '10' };

    changeValue = (newValue) => {
        this.setState({ value: newValue });
        this.props.onChange(this.state.value);  // pass state 'term' back to App.js
    }

    render() {
        return (
            <div className="ui search">
                <p>Number of images to show: </p>
                <NumberInput
                    buttonPlacement="right"
                    stepAmount={5}
                    value={this.state.value}
                    onChange={this.changeValue}
                    minValue={10}
                    maxValue={100}
                />
            </div>

        );
    }
}

export default NumPics;