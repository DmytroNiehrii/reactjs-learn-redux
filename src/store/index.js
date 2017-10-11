import {createStore} from 'redux'
import reducer from '../reducer'

const store = createStore(reducer, {
    count: 0,
    oneOtherMetric: []
})
window.store = store

export default store
