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
            map: '',
            errorOccur: [false, ''],
            setShow: false,
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
          const API = `https://usl.locationiq.com/vl/search.php?key=${process.env.REACT_APP_CITY_SEARCH_IQ_KEY}&q=${this.state.searchQuery}&format=json`;
          const searchResults = await axios.get(API);
          this.setState({ searchLocation: searchResults.data[0]});
          setTimeout(e => {
            this.state({
              map: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.searchLocation.lat},${this.state.searchLocation.lon}&zoom=10`,
            });
          }, 0);
          this.setState({setShow: false});
    
        } catch (error) {
          this.setState({
            errorOccur: [true, `CODE: ${error.code} - MSG: ${error.message}`],
          });
        }
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
                  <Button variant="secondary" size="md" onClick={this.doSearch}>
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
            />
          </>
        )}
      </>
    );
  }
}

export default Main;