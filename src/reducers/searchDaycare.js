const initialState = [];


export default (state = initialState, action) => {
    switch (action.type) {
        case "LIST_DAYCARES_SEARCHED":
            return action.payload
        default:
            return state
    }
}