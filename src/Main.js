import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import CityResults from './CityResults';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            searchLocation: {},
            searchText: '',
            map: '',
            errorOccur: [false, ''],
            setShow: false,
            weather: [],
            movies: [],
            serverUrl: 'https://city-explorador.herokuapp.com',
            serverUrl: 'localhost:3001'
        }
    }

    handleInput = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        this.setState ({ searchQuery: e.target.value})
        console.log(this.state.searchQuery);
      }
    

    handleSearch = async (e) => {
    
        try {
          // city search API
          let API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_SEARCH_IQ_KEY}&q=${this.state.searchQuery}&format=json`;
          const searchResults = await axios.get(API);
          this.setState({ searchLocation: searchResults.data[0]});
          setTimeout(e => {
            this.setState({
              map: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_SEARCH_IQ_KEY}&center=${this.state.searchLocation.lat},${this.state.searchLocation.lon}&zoom=10`,
            });
            this.weatherSearch();
            this.movieSearch();
          }, 0);
          this.setState({setShow: false});
    
        } catch (error) {
          this.setState({
            errorOccur: [true, `CODE: ${error.code} - MSG: ${error.message}`],
          });
        }
      };

      weatherSearch = async () => {
        // API for weather
        const API = `${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.searchText}&lat=${this.state.searchLocation.lat}&lon=${this.state.searchLocation.lon}`;
        // const API = `localhost:3001/weather?searchQuery=${this.state.searchText}&lat=${this.state.searchLocation.lat}&lon=${this.state.searchLocation.lon}`;
        const weatherResponse = await axios.get(API);
        this.setState({weather: weatherResponse.data});
      }

      movieSearch = async () => {
        // API for movies
        const api = `${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.searhText}`;
        // const api = `localhost:3001/movies?searchQuery=${this.state.searhText}`;
        const moviesResponse = await axios.get(api);
        this.setState({movies: moviesResponse.data});
      };
    
    //   render() {
    //     return(
    //       <>
    //         <input onChange={this.handleInput} placeholder='search for a city'></input>
    //         <button on Click={null}>Explore!</button>
    //       </>
    //     )
    //   }
    
    render() {
        return(
            <>
            <div id=''>
            <Form>
            <Container className="ms-3 p-2">
              <Row>
                <Col xs={6} md={4}>
                  <Form.Group className="mb-3 d-inline">
                    <Form.Control
                      type="text"
                      placeholder="Where are you looking for?"
                      onChange={e =>
                        this.setState({ searchQuery: e.target.value })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={8} className="">
                  <Button variant="secondary" size="md" onClick={this.handleSearch}>
                    Explore!
                  </Button>
                </Col>
              </Row>
            </Container>
          </Form>
        </div>

        {
          <Alert className="mb-0" show={this.state.setShow} variant="danger">
            <Alert.Heading>An error has occurred!</Alert.Heading>
            <p>{this.state.errorOccur[1]}</p>
          </Alert>
        }
        {this.state.searchLocation.display_name && (
          <>
            <CityResults
              searchLocation={this.state.searchLocation}
              map={this.state.map}
              weather={this.state.weather}
              movies={this.state.weather}
            />
          </>
        )}
      </>
    );
  }
}

export default Main;