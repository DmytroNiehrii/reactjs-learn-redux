import React, {Component, PropTypes} from 'react';
import store from '../store'
import {increment} from '../AC'

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
        store.dispatch(increment())
    }
}

export default Counter;