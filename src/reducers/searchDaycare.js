const initialState = { daycares: []};


export default (state = initialState, action) => {
    switch (action.type) {
        case "LIST_DAYCARES_SEARCHED":
            return {...state, daycares: state.daycares.concat(action.payload)}
        default:
            return state
    }
}