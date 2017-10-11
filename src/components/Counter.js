import React, {Component, PropTypes} from 'react';
import store from '../store'

class Counter extends Component {

    render() {
        return (
            <div>
                <h2>{store.getState()}</h2>
                <button onClick={this.handleIncrement}>increment</button>
            </div>
        )
    }

    handleIncrement = (ev)=> {
        ev.preventDefault()
    }
}

export default Counter;