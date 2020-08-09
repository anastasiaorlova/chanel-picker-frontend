import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = ({ currentUser, handleLogout }) => {
return (
<header>
    <div>
    <Link to="/home">Home</Link>
    </div>
    <div>
    {currentUser ? (
        <>
        <Link to="/profile">Profile</Link>
        <button onClick={handleLogout}>Logout</button>
        </>
    ) : (
        <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
        </>
        )}
    </div>
    <div>
    <NavLink
    to="/bags"
    /* set exact so it knows to only set activeStyle when route is deeply equal to link */
    exact
    /* add styling to Navlink */
    style={{
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'black',
    textDecoration: 'none',
    color: 'white'
    }}
    /* add prop for activeStyle */
    activeStyle={{
        background: 'darkgray',
        color: 'white'
    }}
    >Choose a bag</NavLink>
    <NavLink
    to="/quiz"
    exact
    style={{
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'black',
    textDecoration: 'none',
    color: 'white',
    }}
    activeStyle={{
        background: 'darkgray',
        color: 'white'
    }}
    >Take a quiz!</NavLink>  
</div>;
</header>
)
}

export default NavBar