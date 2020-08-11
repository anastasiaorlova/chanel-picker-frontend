import React from 'react';
import BagsCard from '../components/BagsCard';
import Filter from '../components/Filter';

class BagsContainer extends React.Component {

    state = {
        showClassic: false,
        showBoy: false,
        showGabrielle: false,
        showCollection: false,
        showAll: false
    }

    toggleClassic = () => {
        this.setState({
            showClassic: !this.state.showClassic
        })
    }

    toggleBoy = () => {
        this.setState({
            showBoy: !this.state.showBoy
        })
    }

    toggleGabrielle = () => {
        this.setState({
            showGabrielle: !this.state.showGabrielle
        })
    }

    toggleCollection = () => {
        this.setState ({
            showCollection: !this.state.showCollection
        })
    }

    toggleAll = () => {
        this.setState ({
            showAll: !this.state.showAll
        })
    }

    renderBags = () => {
        let sortedBags = [...this.props.bags] 
        if (this.state.showClassic) {
            sortedBags = this.props.bags.filter(bag => bag.style === "Classic")
        } 
        if (this.state.showBoy) {
            sortedBags = this.props.bags.filter(bag => bag.style === "Boy")
        } 
        if (this.state.showGabrielle) {
            sortedBags = this.props.bags.filter(bag => bag.style === "Gabrielle")
        }  
        if (this.state.showCollection) {
            sortedBags = this.props.bags.filter(bag => bag.style === "Collection")
        } 
        if (this.state.showAll) {
            sortedBags = this.props.bags
        }
        if (!this.state.showClassic && !this.state.showBoy && !this.state.showGabrielle && !this.state.showCollection && !this.state.showAll) {
            return false 
        } 

        return sortedBags.map (bag => 
            <BagsCard 
            key={bag.id}
            id={bag.id}
            image={bag.image}
            description={bag.description}
            style={bag.style}
            likes={bag.likes}
            addFavorite={this.props.addFavorite}
            />)
    }
    
    render() {
        return (
            <div>
                <h1>CHANEL HANDBAGS PICKER</h1>
                <Filter 
                toggleClassic={this.toggleClassic}
                toggleBoy={this.toggleBoy}
                toggleGabrielle={this.toggleGabrielle}
                toggleCollection={this.toggleCollection}
                toggleAll={this.toggleAll}
                />
                {this.renderBags()}
            </div>
        )
    }
}

export default BagsContainer