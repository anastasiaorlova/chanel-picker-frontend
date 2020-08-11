import React from 'react';

class BagsCard extends React.Component {

    state = {
        likes: this.props.likes
    }

handleUpdateLikes = () => {
    let newLikes = this.state.likes + 1
    this.setState({
        likes: newLikes
    })
    fetch(`http://localhost:3001/bags/${this.props.id}/likes`, {
        credentials: "include",
        method: "PATCH",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify({
            likes: this.state.likes
        })
        })
    }

    render() {
        const { id, image, description, style, addFavorite} = this.props
        const { likes } = this.state
        return (
            <div className="bag">
                <img src={image} alt={id} width="550"  /> 
                    <p>Description: {description} </p>
                    <p>Style: {style} </p>
                    <button onClick={this.handleUpdateLikes}> {likes} <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/heavy-black-heart_2764.png" alt="heart" width="10" height="10" /> </button>
                    <button onClick = {() => addFavorite(this.props)}> <img src="https://twemoji.maxcdn.com/2/svg/2714.svg" alt="add" width="10" height="10" /></button>
                </div>
        )
    }
}


export default BagsCard 