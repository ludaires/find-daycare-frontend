import { updateDaycare } from '../actions/myDaycares.js'

export const updateDaycareForm = (daycareForm) => {
    console.log("daycareForm,", daycareForm)
    return {
        type: "UPDATE_DAYCARE_FORM",
        daycareForm
    }
}


export const fetchUpdateDaycare = (daycareFormData, userId, daycareId) => {
    const sendDaycareData = {
        notes: daycareFormData.notes,
        schedule_visit: daycareFormData.scheduleVisit 
    }
    return dispatch => {
        const url = `http://localhost:3001/api/v1/users/${userId}/my_daycares/${daycareId}`
        return fetch(url, {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendDaycareData)
        })
        .then(r => r.json())
        .then(res => {
            if (res.error){
                alert(res.error)
            } 
            else {
                dispatch(updateDaycare(res))
            }
        })
        .catch(console.log)
    }
}