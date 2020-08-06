import React from 'react';

class Filter extends React.Component {

    render() {
        return (
            <div>
            <button onClick={this.props.toggleClassic}>Show Classic Bags</button>
            <button onClick={this.props.toggleBoy}>Show Boy Bags</button>
            <button onClick={this.props.toggleGabrielle}>Show Gabrielle Bags</button>
            <button onClick={this.props.toggleCollection}>Show Collection Bags</button>
            <button onClick={this.props.toggleAll}>Show All Bags</button>
            </div>
        )
    }
}

export default Filter