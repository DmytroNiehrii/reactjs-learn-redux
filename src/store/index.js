import {createStore} from 'redux'

const store = createStore(() => 0, 0)
window.store = store

export default store
