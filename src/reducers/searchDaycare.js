const initialState = [];


export default (state = initialState, action) => {
    switch (action.type) {
        case "LIST_DAYCARES_SEARCHED":
            return action.payload
        case "INCLUDE_REVIEWS_YELP":
            return action.payload
           
        default:
            return state
    }
}