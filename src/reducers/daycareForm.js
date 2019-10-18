const initialState = {
    notes: "",
    scheduleVisit: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_DAYCARE_FORM":
            state = {...state, [action.daycareForm.name]: action.daycareForm.value}
            return state
        default:
            return state
    }
}