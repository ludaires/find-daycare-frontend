import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";

const NavBar = ({ loggedIn }) => {
    return (
        <nav className="NavBar">
            <div >
                <NavLink exact to="/search">Search </NavLink> 
                <NavLink exact to="/my-daycares"> My Daycares </NavLink> 
                { loggedIn ? <NavLink exact to="/logout"> Logout </NavLink> : <NavLink exact to="/login" >Login</NavLink>} <br></br>
            </div>
            <hr></hr>
        </nav>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser,
        loggedIn: !!currentUser
    }
}

export default connect(mapStateToProps)(NavBar)

