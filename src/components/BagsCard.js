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
        // console.log(this.props)
        const { id, image, description, addFavorite} = this.props
        const { likes } = this.state
    
        return (
            <div className="bag">
                <img src={image} alt={id} width="550"/> 
                    <p>{description} </p>

                    <button className="like" onClick={this.handleUpdateLikes}> {likes} liked</button>
                    <button className="add" onClick = {() => addFavorite(this.props)}><span>Add To Favorite</span></button>
                </div>
        )
    }
}


export default BagsCard 