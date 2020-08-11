import React from 'react'

class Profile extends React.Component {
state = {
avatar: this.props.currentUser.avatar,
bio: this.props.currentUser.bio
}

handleChange = e => {
this.setState({ [e.target.name]: e.target.value })
}

handleSubmit = e => {
e.preventDefault()
fetch("http://localhost:3001/profile", {
    method: "PATCH",
    credentials: "include",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify(this.state)
})
    .then(r => r.json())
    .then(updatedUser => {
    this.props.updateUser(updatedUser)
    })
}

handleFaves = () => {
    const favedBags = this.props.faves.map(bag => {
    return <img src={bag.image} alt="bag" width="550" height="300" />
    })
    return favedBags
}

// handleDelete = () => {
//     const deletedId = this.props.faves.map(bag => {
//         return bag.id 
//     })
//     return deletedId
// }

render() {
console.log(this.props.faves)
const { avatar, bio } = this.state
const { username } = this.props.currentUser
const { id } = this.props.faves

return (
    <div><form onSubmit={this.handleSubmit}>
    <h1>{username}'s Profile</h1>

    <label>Profile Image</label>
    <input
        type="text"
        name="avatar"
        autoComplete="off"
        value={avatar}
        onChange={this.handleChange}
    />
    <img src={avatar.length ? avatar : "https://cdn.iconscout.com/icon/free/png-512/account-profile-avatar-man-circle-round-user-30452.png"} alt={username} />

    <label>Bio</label>
    <textarea
        name="bio"
        value={bio}
        onChange={this.handleChange}
    />

    <input type="submit" value="Update" />
    </form>
    <label className="myBags"><h1>Favorite bags</h1>
    {this.handleFaves()}

    <button onClick={() => {this.props.removeFavorite(id)}}>Delete</button>
    </label>
    
    </div>
)
}
}

export default Profile