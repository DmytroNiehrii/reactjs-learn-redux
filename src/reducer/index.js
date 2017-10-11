export default (state, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + 1
    }
    return state
}