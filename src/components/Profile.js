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

handleDelete = (bag_id) => {
    fetch(`http://localhost:3001/user_bags/${bag_id}`, {
        method: "DELETE",
        credentials: "include",
        })
        this.props.removeFavorite(bag_id)
    }

handleFaves = () => {
    const favedBags = this.props.faves.map(bag => {
        return <div className="faves">
        <img src={bag.image} alt="bag" width="550" />
        <br></br>
        <button className="delete" onClick={()=> this.handleDelete(bag.id)}>Delete</button>
        </div>
    })
    return favedBags
    }


render() {

const { avatar, bio } = this.state
const { username } = this.props.currentUser

return (
    <div><form onSubmit={this.handleSubmit}>
    <h1>{username}'s Profile</h1>

    <label>Profile Image:</label>
    <input
        type="text"
        name="avatar"
        autoComplete="off"
        value={avatar}
        onChange={this.handleChange}
    />
    <img src={avatar.length ? avatar : "https://cdn.iconscout.com/icon/free/png-512/account-profile-avatar-man-circle-round-user-30452.png"} alt={username} />

    <label>Bio:</label>
    <textarea
        name="bio"
        value={bio}
        onChange={this.handleChange}
    />

    <input type="submit" value="Update" />
    </form>

    <label className="myBags" ><h1>Favorite bags</h1>
    <br></br>
    {this.handleFaves()}
    <br></br>
    </label>
    </div>
)
}
}

export default Profile

