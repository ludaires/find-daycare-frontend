import React from 'react';
import { connect } from 'react-redux';


// THIS COMPONENT DISPLAY THE RESULTS OF DAYCARES' SEARCH
const ListDaycareFromYelp = (props) => {
  
    const renderDaycares = () => {
        return props.daycares.map((daycare) => {
            return (                               
                <li key={daycare.id}>
                    <div>
                        <h2>{daycare.name}</h2>
                        <h3>Rating: {daycare.rating}</h3>  
                        <p>{daycare.location.display_address}</p>
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
        daycares: state.daycaresFromYelp.daycares
    }
}

export default connect(mapStateToProps)(ListDaycareFromYelp);