import React from 'react';
import { connect } from 'react-redux';
import Login from './Login.js';
import Logout from './Logout.js';


const NavBar = ({ currentUser }) => {
    return (
        <nav className="NavBar">
            <div >
                { currentUser ? <Logout/> : <Login/> }
            </div>
            <hr></hr>
        </nav>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}


export default connect(mapStateToProps)(NavBar)