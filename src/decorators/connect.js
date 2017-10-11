import React, {Component} from 'react'
import store from '../store'

export default (mapStateToProps, actionCreators) => (Component) => class Connected extends Component {
    constructor(props) {
        super();
        this.actionCreatorsWithDispatch = Object.keys(actionCreators).reduce((acc, key) => ({
            ...acc,
            [key]: (...args) => store.dispatch(actionCreators[key](...args))
        }), {})

        this.state = mapStateToProps(store.getState(), props)
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(this.handleStoreChange)
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    handleStoreChange = () => {
        this.setState(mapStateToProps(store.getState(), this.props))
    }

    render() {
        return <Component {...this.props} {...this.state} {...this.actionCreatorsWithDispatch} />
    }
}