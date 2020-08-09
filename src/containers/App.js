import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { withRouter, Redirect } from 'react-router-dom';
import './App.css'
import AllBagsPage from './AllBagsPage';
import NavBar from '../components/NavBar';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import Profile from '../components/Profile';

class App extends React.Component { 

  state = {
    currentUser: null
  }

   // log user in when component mounts
  componentDidMount() {
    // TODO: check if user is logged in
    // and set current user in state
    fetch("http://localhost:3000/autologin", {
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
    fetch("http://localhost:3000/logout", {
      credentials: "include"
    })
      .then(r => r.json())
      .then(() => {
        this.setState({ currentUser: null }, () => {
          this.props.history.push('/')
        })
      })
  }

  // Navbar = () =>
  //   <div>
  //     <NavLink
  //       to="/"
  //       /* set exact so it knows to only set activeStyle when route is deeply equal to link */
  //       exact
  //       /* add styling to Navlink */
  //       style={{
  //       width: '100px',
  //       padding: '12px',
  //       margin: '0 6px 6px',
  //       background: 'black',
  //       textDecoration: 'none',
  //       color: 'white'
  //     }}
  //       /* add prop for activeStyle */
  //       activeStyle={{
  //         background: 'darkgray',
  //         color: 'white'
  //       }}
  //     >Choose a bag</NavLink>
  //     <NavLink
  //       to="/quiz"
  //       exact
  //       style={{
  //       width: '100px',
  //       padding: '12px',
  //       margin: '0 6px 6px',
  //       background: 'black',
  //       textDecoration: 'none',
  //       color: 'white',
  //       }}
  //       activeStyle={{
  //         background: 'darkgray',
  //         color: 'white'
  //       }}
  //     >Take a quiz!</NavLink>  
  //   </div>;

    render() {
      return (
        <>
        <NavBar currentUser={this.state.currentUser} handleLogout={this.handleLogout} />
        <main>
          <Switch>
            <Route exact path="/bags"  render={() => <AllBagsPage />} />
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
            <Route path="/">
              <h1>Please Login or Sign Up</h1>
            </Route>
          </Switch>
        </main>
      </>













        // <div className="App">
        // <Navbar />
        //   <Switch>
        //   <Route exact path="/" render={() => <AllBagsPage /> } />
        //   </Switch>
        // </div>
      );
    }
}


  

  
    
    

export default App;


  
