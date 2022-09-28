import React from 'react';
// import axios from 'axios';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div id='Main'>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     searchQuery: '',
  //     searchLocation: {},
  //     map: '',
  //     errorOccur: [false, ''],
  //     setShow: false,
  //   }
  // }

  // handleInput = (e) => {
  //   e.preventDefault();
  //   this.setState ({ searchQuery: e.target.value})
  //   console.log(this.state.searchQuery);
  // }

  // handleSearch = async (e) => {
    
  //   try {
  //     const API = `https://usl.locationiq.com/vl/search.php?key=${process.env.REACT_APP_CITY_SEARCH_IQ_KEY}&q=${this.state.searchQuery}&format=json`;
  //     const searchResults = await axios.get(API);
  //     this.setState({ searchLocation: searchResults.data[0]});
  //     setTimeout(e => {
  //       this.state({
  //         map: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.searchLocation.lat},${this.state.searchLocation.lon}&zoom=10`,
  //       });
  //     }, 0);
  //     this.setState({setShow: false});

  //   } catch (error) {
  //     this.setState({
  //       errorOccur: [true, `CODE: ${error.code} - MSG: ${error.message}`],
  //     });
  //   }
  // };

  // render() {
  //   return(
  //     <>
  //       <input onChange={this.handleInput} placeholder='search for a city'></input>
  //       <button on Click={null}>Explore!</button>
  //     </>
  //   )
  // }

//   render() {
//     return(
//       <>
//       <Header />
//       <Main />
//       <Footer />
//       </>
//     );
//   }
// }

