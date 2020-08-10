import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import './App.css'
import AllBagsPage from './AllBagsPage';
import NavBar from '../components/NavBar';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import Profile from '../components/Profile';
import Quiz from '../components/Quiz';


class App extends React.Component { 

  state = {
    currentUser: null
  }

  componentDidMount() {
    fetch("http://localhost:3001/autologin", {
      credentials: "include"
    })
      .then(r => {
        if (r.ok) {
          return r.json()
        } else {
          throw Error("Not logged in!")
        }
      })
      .then(user => {
        this.handleLogin(user)
      })
      .catch((err) => console.error(err))
  }

  updateUser = newUser => {
    this.setState({ currentUser: newUser })
  }

  handleLogin = currentUser => {
    // set current user, then redirect to home page
    this.setState({ currentUser }, () => {
      this.props.history.push('/home')
    })
  }

  handleLogout = () => {
    fetch("http://localhost:3001/logout", {
      credentials: "include"
    })
      .then(r => r.json())
      .then(() => {
        this.setState({ currentUser: null }, () => {
          this.props.history.push('/')
        })
      })
  }
  
  render() {
      return (
        <>
        <NavBar currentUser={this.state.currentUser} handleLogout={this.handleLogout} />
        <main>
          <Switch>
            <Route exact path="/bags"  render={() => <AllBagsPage />} />
            <Route exact path="/quiz"  render={() => <Quiz />} />
            <Route exact path="/signup">
              <SignUp handleLogin={this.handleLogin} />
            </Route>
            <Route exact path="/login">
              <Login handleLogin={this.handleLogin} />
            </Route>
            <Route exact path="/profile">
              {this.state.currentUser ? <Profile currentUser={this.state.currentUser} updateUser={this.updateUser} /> : <Redirect to='/' />}
            </Route>
            <Route exact path="/home">
              {this.state.currentUser ? <h1>Welcome, {this.state.currentUser.username}</h1> : <Redirect to='/' />}
            </Route>
            <Route exact path="/">
              <h1>Please Login or Sign Up</h1>
            </Route>
          </Switch>
        </main>
      </>
      );
    }
}

export default withRouter(App);


  
