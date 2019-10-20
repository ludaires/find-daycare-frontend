import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm.js';  
import { login } from '../actions/currentUser.js';
import { Link } from 'react-router-dom';



const Login = ({loginFormData, updateLoginForm, login, history}) => {
    
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
        login(loginFormData, history)
    }

    return (
       <div className="login__page">
            <form className="register__form" onSubmit={handleSubmit}>
                <label name="username">  
                    <input className="register__input" placeholder="Username" onChange={handleInputChange} value={loginFormData.username} placeholder="username" type="text" name="username"/>
                </label> <br></br>
                <label name="password">
                    <input className="register__input" onChange={handleInputChange} placeholder="Password" value={loginFormData.password} placeholder="password" type="password" name="password"/>
                </label><br></br>
                <input className="register__button" type="submit" value="Login"/>
                <p className="register__message">Not registered? <Link to="/signup">Create an account</Link></p>
            </form>
       </div>
      
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login } )(Login); 