export const daycaresFromYelp = (businesses) => {
    return { type: "LIST_DAYCARES_SEARCHED", payload: businesses };
}
// SEARCHING DAYCARES USING ZIP CODE.
export const fetchDaycareFromYelp = (value) => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    const url = `https://api.yelp.com/v3/businesses/search?term=daycare&location=${value}&limit=5`
    return dispatch => {
        fetch(proxyurl + url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer 5BCE_9Zk-nhS7EcP1fYA0WcOf1L1Xq8hAY_mN5blb3Q4fH4Q-OqhBDxHGbEJstY8hOPn3WSyyHL_pdiaXiisk1fICFG445i4fUARZmQxiuhSudJo4YZ0RKOXV69SXXYx',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(data => {
            const businesses = data.businesses;
            businesses.sort(function (a,b){
                return b.rating - a.rating;
            });        
            // MY ERRORS IS HERE. I'M TRYING ADD A NEW KEY (.REVIEW) IN THE DAYCARE OBJECT. THEN I CAN DISPLAY THIS INFORMATION TO MY USERS.
            let newBussinessesArray = businesses.map(business => loadingReviewsYelp(business))
            return console.log(newBussinessesArray)
        })
        // TRY TO ADD DAYCARES TO THE STORE.
        .then(res => dispatch(daycaresFromYelp(res)))
    }
}

// UPDATING THE OBJECT DAYCARE TO INCLUDE THE REVIEWS. 
export const loadingReviewsYelp = (business) => {
    const businessId = business.id
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    const url = `https://api.yelp.com/v3/businesses/${businessId}/reviews`
    return (
        fetch(proxyurl + url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer 5BCE_9Zk-nhS7EcP1fYA0WcOf1L1Xq8hAY_mN5blb3Q4fH4Q-OqhBDxHGbEJstY8hOPn3WSyyHL_pdiaXiisk1fICFG445i4fUARZmQxiuhSudJo4YZ0RKOXV69SXXYx',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(data => {
            business.reviews =  data.reviews
            return business
        })
    )
    
}

