const initialState = {
    notes: "",
    scheduleVisit: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_DAYCARE_FORM":
            console.log("Inside reducer DaycareForm, my action is: ", action.daycareForm)
            state = {...state, [action.daycareForm.name]: action.daycareForm.value}
            return action.daycareForm
            // return state
        default:
            return state
    }
}