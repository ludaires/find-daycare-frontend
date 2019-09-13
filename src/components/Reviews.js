import React from 'react';


 const Reviews = (props) => {
    return props.reviews.map(review => {
            return (
                <ul>
                    <li>{review.text}</li>
                </ul>
                
            )
        })
}
export default Reviews