import React, {Component, PropTypes} from 'react';
import store from '../store'
import {increment} from '../AC'

export default class Counter extends Component {
    static propTypes = {
    };

    state = {
        count: store.getState().count
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(this.handleStoreChange)
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.handleIncrement}>increment</button>
            </div>
        )
    }

    handleIncrement = (ev)=> {
        ev.preventDefault()
        store.dispatch(increment())
    }

    handleStoreChange = () => {
        this.setState({
            count: store.getState().count
        })
    }
}