import {INCREMENT} from '../constants'

export default (state, action) => {
    // eslint-disable-next-line
    switch (action.type) {
        case INCREMENT: return state + 1
    }
    return state
}