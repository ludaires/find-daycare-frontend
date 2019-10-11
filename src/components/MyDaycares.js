import React from 'react';
import { connect } from 'react-redux';
import DaycareCard from './DaycareCard.js';
import { fetchGetDaycare } from '../actions/myDaycares.js';


class MyDaycares extends React.Component {

    componentDidMount(){
        this.props.fetchGetDaycare(this.props.currentUser.id);
    }


    render(){
        return (
            <div>
                {this.props.daycares.length > 0 ? this.props.daycares.map(daycare => <DaycareCard key={daycare.id} daycare={daycare}/>) : null }
                {console.log("Inside MyDaycare the user is:", this.props.currentUser)}
            </div>
        );
    }     
 }

const mapStateToProps = state => {
    return {
        daycares: state.myDaycares,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, {fetchGetDaycare} )(MyDaycares);