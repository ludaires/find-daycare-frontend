const initialState = { daycares: []};


export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_DAYCARE":
            state = {...state, daycares: action.payload}  
            return state
        case "ADD_DAYCARE":
            state = {...state, daycares: state.daycares.concat(action.payload)}  
            return state
        default:
            return state
    }
}