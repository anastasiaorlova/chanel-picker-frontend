import React from 'react';

class Filter extends React.Component {

    render() {
        return (
<div className="grid-container">
    <div className="text">
        <p>
        <li>You love flap bags</li>
        <li>You prefer chic, classic and elegant style</li>
        <li>You’re looking for a bag that works with every outfit</li>
        </p>
        <button className="bagsBtn" onClick={this.props.toggleClassic}>Show Classic Bags</button>
    </div>
    <div className="text">
        <p>
        <li>You’re up for young, bold and slightly arrogant look</li>
        <li>You need something to go with casual look</li>
        <li>You love flap bags but got tired of classic flap</li>
        </p>
        <button className="bagsBtn" onClick={this.props.toggleBoy}>Show Boy Bags</button>
    </div>
    <div className="text">
        <p>
        <li>You love chains and straps</li> 
        <li>You don’t mind unusual - but anyway well-recognizable - shape  </li>
        <li>You want a roomy bag without a flap</li>
        </p>
        <button className="bagsBtn" onClick={this.props.toggleGabrielle}>Show Gabrielle Bags</button>
    </div>
    <div className="text">
        <p>
        <li>You’re not just an admirer but a collector</li>
        <li>You love whimsical fabrics and shapes </li>
        <li>You would like to purchase something truly special and unique</li>
        </p>
        <button className="bagsBtn" onClick={this.props.toggleCollection}>Show Collection Bags</button>
    </div>
    <div className="text">
        <p>
        <li>You’re open to anything!</li>
        </p>
        <button className="bagsBtn" onClick={this.props.toggleAll}>Show All Bags</button>
    </div>
</div>
        )
    }
}

export default Filter