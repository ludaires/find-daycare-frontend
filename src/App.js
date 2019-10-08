import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer.js';
import NavBar from './components/NavBar.js';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import MyDaycares from './components/MyDaycares.js';
import SearchDaycare from './components/SearchDaycare.js';
import Signup from './components/Signup.js';
import Logout from './components/Logout';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="container">
        <NavBar/>
        <Switch>
          <Route exact path='/search' component={SearchDaycare}/>
          <Route exact path='/login' component={Login}/> 
          <Route exact path='/logout' component={Logout}/>
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/my-daycares' component={MyDaycares} />
        </Switch>
      <MainContainer/>        
      </div>
    );
  }
}

export default connect(null, {getCurrentUser})(App);
