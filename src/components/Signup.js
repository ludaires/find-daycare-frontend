  
import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from "../actions/signupForm.js"
import { signup } from "../actions/currentUser.js"


const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {

  const handleUserInfoInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    signup(signupFormData, history)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label name="username"> Username: 
        <input placeholder="username" value={signupFormData.name} name="username" type="text" onChange={handleUserInfoInputChange} />
      </label><br></br>
      <label name="email"> Email: 
        <input placeholder="email" value={signupFormData.email} name="email" type="text" onChange={handleUserInfoInputChange} />
      </label><br></br>
      <label name="password"> Password: 
        <input placeholder="password" value={signupFormData.password} name="password" type="password" onChange={handleUserInfoInputChange} />
      </label><br></br>
      <input type="submit" value="Sign Up"/>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup } )(Signup)