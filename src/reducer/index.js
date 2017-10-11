import counterReducer from './counter'
import oneOtherMetricReducer from './oneOtherMetric'

export default (state, action) => {
    return {
        count: counterReducer(state.count, action),
        oneOtherMetric: oneOtherMetricReducer(state.oneOtherMetric, action)
    }
}