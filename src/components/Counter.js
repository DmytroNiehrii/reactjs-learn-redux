import React, {Component, PropTypes} from 'react';
//import store from '../store'
import {increment} from '../AC'
import connect from '../decorators/connect'

class Counter extends Component {
    static propTypes = {
    };

    render() {
        return (
            <div>
                <h2>{this.props.count}</h2>
                <button onClick={this.handleIncrement}>increment</button>
            </div>
        )
    }

    handleIncrement = ev => {
        ev.preventDefault()
        this.props.increment()
    }
}

export default connect(
    (state) => ({count: state.count}),
    {increment}
)(Counter)