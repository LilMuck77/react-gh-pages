import React, { Component } from 'react';

class Country extends Component {
  state = {
    name: 'United States',
    medals: 0,
  }
  handlePlusIncrement = () => {
    this.setState({ medals: this.state.medals + 1})
  }

  handleMinusIncrement = () => {
    this.setState({ medals: this.state.medals - 1})
  }

  render() {
    const { name, medals } = this.state;

    return (
        <div className="Country">
        <div className="myRow">
            <h2>{name}</h2>
            <div className='medals'>Gold Medals: {medals}</div>
            <button onClick={this.handlePlusIncrement}> + </button>
            <button onClick={this.handleMinusIncrement}> - </button>
        </div>
        </div>
    );
}
}


export default Country