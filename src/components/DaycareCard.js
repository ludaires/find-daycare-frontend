import React from 'react';
import { connect } from 'react-redux';
import Icon from '@mdi/react'
import { mdiMapMarker } from '@mdi/js';
import { updateDaycareForm, fetchUpdateDaycare } from '../actions/daycareForm.js';
import { fetchDeleteDaycare } from '../actions/myDaycares.js';

class DaycareCard extends React.Component {
   
    handleInputChange = e => {
        // e.preventDefault();
        const { name, value } = e.target;
        const updateDaycareInfo = {
            ...this.props.daycareFormData,
            [name]: value
        }
        console.log("Inside handle change for form, my daycareformdata is: ", updateDaycareInfo)
        this.props.updateDaycareForm(updateDaycareInfo)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const userId = this.props.user.id
        const daycareId = this.props.daycare.id
        this.props.fetchUpdateDaycare(this.props.daycareFormData, userId, daycareId)
    }

    handleDeleteDaycare = (e, daycare, user )  => {
        e.preventDefault();
        this.props.fetchDeleteDaycare(daycare, user.id)
    }

    render() {
        return (
            <div key={this.props.daycare.id} className="daycare-card">
                <h1 className="daycare__name">{this.props.daycare.name} </h1>
                <h2 className="daycare__rating" >Rating: {this.props.daycare.rating} | Phone: {this.props.daycare.phone}</h2>              
                <p className="daycare__address"> <Icon className="daycare__icon" path={mdiMapMarker} title="Daycare Address" description={this.props.daycare.location} size={1} color="red"/>Location: {this.props.daycare.location}</p>
            <form onSubmit={this.handleSubmit} className="daycare__review">
                <label> Notes: 
                    <input onChange={this.handleInputChange} type="text" name="notes" value={this.props.daycare.notes}/>
                </label> <br></br>                     
                <label> Schedule a Visit
                    <input onChange={this.handleInputChange} type="text" name="scheduleVisit" value={this.props.daycare.schedule_visit}/>
                </label> <br></br>
                <input type="submit" value="Save"/> 
            </form> 
            <button onClick={(e) => this.handleDeleteDaycare(e, this.props.daycare, this.props.user)} >Delete</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        daycareFormData: state.daycareForm,
    }
}

export default connect( mapStateToProps, { fetchDeleteDaycare, updateDaycareForm, fetchUpdateDaycare })(DaycareCard);
