import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import WeatherDay from './WeatherDay'

class Weather extends React.Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title className="mb-2">Weather Forecast</Card.Title>
                {this.props.weather.map((e, i) => {
                  return <WeatherDay key={i} date={e.date} description={e.description} />;
                })}
              </Card.Body>
          </Card>
        );
    }
}

export default Weather;