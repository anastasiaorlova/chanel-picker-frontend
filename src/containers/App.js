import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import AllBagsPage from './AllBagsPage';

function App() {

  const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'black',
    textDecoration: 'none',
    color: 'white',
  }

  const Navbar = () =>
    <div>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={link}
        /* add prop for activeStyle */
        activeStyle={{
          background: 'darkgray',
          color: 'white'
        }}
      >Choose a bag</NavLink>
      <NavLink
        to="/quiz"
        exact
        style={link}
        activeStyle={{
          background: 'darkgray',
          color: 'white'
        }}
      >Take a quiz!</NavLink>  
    </div>;





  return (
    <div className="App">
    <Navbar />
      <Switch>
      <Route exact path="/" render={() => <AllBagsPage /> } />
      </Switch>
    </div>
  );
}

export default App;


  
