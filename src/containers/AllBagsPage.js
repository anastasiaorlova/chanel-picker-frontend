import React from 'react';
import BagsContainer from './BagsContainer';

class AllBagsPage extends React.Component {

    state ={
        bags: [],
    }

    componentDidMount() {
        fetch(`http://localhost:3001/bags`, {
            credentials: "include"
        })
        .then(r => r.json())
        .then(bags => {
            this.setState({
                bags,

            })
        })
    }

    render() {
        return(
            <div>
                <BagsContainer bags={this.state.bags}/>
                </div>
        )
    }

}

export default AllBagsPage
