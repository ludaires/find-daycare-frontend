import React from 'react';
import { connect } from 'react-redux';

const ListDaycareFromYelp = (props) => {
    
    const renderReviews = (daycare) => {
        if (!daycare.reviews) {
            return;
        }

        return(
            <ul>
                {
                    daycare.reviews.map((review) => {
                        return (
                            <li key={daycare.id}>
                                <p>{review.text}</p>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    const getReviews = (event, daycare) =>  {   
        event.preventDefault();
        renderReviews(daycare)
    }
      
    const renderDaycares = () => {
        return props.daycares.map((daycare) => {
            return (                               
                <li key={daycare.id}>
                    <div>
                        <h2>{daycare.name}</h2>
                        <h3>Rating: {daycare.rating}</h3>  
                        <p>{daycare.location.display_address}</p>
                        <button type="button" name="getReviews" onClick={(event) => getReviews(event, daycare)}>Read reviews</button>                    
                    </div>    
                </li>             
            );
        })
    }

    return (  
        <div>  
            <ul>
                {renderDaycares()}
            </ul>
        </div> 
    )
}

const mapStateToProps = state => {
    return {
        daycares: state.daycaresFromYelp,
    }
}

export default connect(mapStateToProps)(ListDaycareFromYelp);