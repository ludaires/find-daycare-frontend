import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm.js';  
import { login } from '../actions/currentUser.js';


const Login = ({loginFormData, updateLoginForm, login }) => {
    
    const handleInputChange = e => {
        const {name, value } = e.target
        const updateFomrInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updateFomrInfo)
    }
    const handleSubmit = e => {
        e.preventDefault()
        login(loginFormData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label name="username"> Username: 
                <input onChange={handleInputChange} value={loginFormData.username} placeholder="username" type="text" name="username"/>
            </label> <br></br>
            <label name="password"> Password: 
                <input onChange={handleInputChange} value={loginFormData.password} placeholder="password" type="password" name="password"/>
            </label><br></br>
            <input type="submit" value="Login In"/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login } )(Login); 