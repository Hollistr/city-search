import React from 'react';
// import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    }
  }

  handleInput = (e) => {
    e.preventDefault();
    this.setState ({ searchQuery: e.target.value})
    console.log(this.state.searchQuery);
  }

  handleSearch = async (e) => {
    
    try {
      const API = `https://usl.locationiq.com/vl/search.php?key=${process.env.REACT_APP_CITY_SEARCH_IQ_KEY}&q=${this.state.searchQuery}&format=json`;

    } catch (error) {

    }
  }

  render() {
    return(
      <>
        <input onChange={this.handleInput} placeholder='search for a city'></input>
        <button on Click={null}>Explore!</button>
      </>
    )
  }
}

  export default App;