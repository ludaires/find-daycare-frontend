import React from 'react';
import { connect } from 'react-redux';
import Reviews from './Reviews.js';
import Icon from '@mdi/react'
import { mdiMapMarker } from '@mdi/js';
import { fetchAddDaycare } from '../actions/myDaycares.js';
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
// import Icon from '@material-ui/core/Icon';

// THIS COMPONENT DISPLAY THE RESULTS OF DAYCARES' SEARCH
const ListDaycareFromYelp = (props) => {

   const handleOnClick = (e, daycare) => {
        e.preventDefault();
        props.fetchAddDaycare(daycare)
    }

    const renderDaycares = () => {
        return props.daycares.map((daycare) => {
            return (    
                <li className="daycare-card" key={daycare.id}>
                    {/* <div className="daycare__information"> */}
                    <h1 className="daycare__name">{daycare.name}</h1>
                    <img className="daycare__img" src={daycare.image_url} alt={`daycare: ${daycare.name}`}/>
                    {/* <div> I have to figure out a way to put the icon close to the address */}
                        {/* <Icon path={mdiMapMarker} title="Daycare Address" description={daycare.location.display_address} size={1} color="red"/> */}
                        <p className="daycare__address"> <Icon className="daycare__icon" path={mdiMapMarker} title="Daycare Address" description={daycare.location.display_address} size={1} color="red"/> {daycare.location.address1} {daycare.location.city}, {daycare.location.state} {daycare.location.zip_code}| {daycare.display_phone} </p>
                    {/* </div> */}
                    <h2 className="daycare__rating">Rating: {daycare.rating}</h2>  
                    <p className="daycare__review"><strong>Reviews</strong></p>
                    <Reviews reviews={daycare.reviews}/>
                    {/* </div> */}
                    <Button onClick={(e) => handleOnClick(e, daycare)}
                        variant="contained"
                        color="primary"
                        size="large"
                        className="daycare__button" 
                        startIcon={<SaveIcon />}
                    >
                        Bookmark
                    </Button>
                    {/* <button onClick={(e) => handleOnClick(e, daycare)}>Add Daycare to my list</button> */}
                </li>  
            );
        })
    }

    return (  
        <ul>{renderDaycares()}</ul>
    )
}

const mapStateToProps = state => {
    return {
        daycares: state.daycaresFromYelp.daycares
    }
}

export default connect(mapStateToProps,{fetchAddDaycare})(ListDaycareFromYelp);