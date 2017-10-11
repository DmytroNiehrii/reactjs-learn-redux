import {combineReducers} from 'redux'
import counterReducer from './counter'
import oneOtherMetricReducer from './oneOtherMetric'

// with combineReducers
export default combineReducers({
    count: counterReducer,
    oneOtherMetric: oneOtherMetricReducer
})

// manually
/*export default (state = {}, action) => {
    return {
        count: counterReducer(state.count, action),
        oneOtherMetric: oneOtherMetricReducer(state.oneOtherMetric, action)
    }
}*/