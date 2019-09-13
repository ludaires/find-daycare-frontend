import React from 'react';
import { connect } from 'react-redux';
import Reviews from './Reviews.js';


// THIS COMPONENT DISPLAY THE RESULTS OF DAYCARES' SEARCH
const ListDaycareFromYelp = (props) => {

    const renderDaycares = () => {
        return props.daycares.map((daycare) => {
            return (                               
                <div className="daycare-card" key={daycare.id}>
                    <img className="daycare__img" src={daycare.image_url} alt={`daycare: ${daycare.name}`}/>
                    <h1>{daycare.name}</h1>
                    <h2>Rating: {daycare.rating}</h2>  
                    <p>{daycare.location.display_address} | {daycare.display_phone} </p>
                    <Reviews key={daycare.id} reviews={daycare.reviews}/>
                </div>           
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
        daycares: state.daycaresFromYelp.daycares
    }
}

export default connect(mapStateToProps)(ListDaycareFromYelp);