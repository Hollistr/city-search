import React from 'react';
import Card from 'react-bootstrap/Card';

class Weather extends React.Component {
    render() {
        return (
            <>
                <Card.Text>Date: {this.props.date}</Card.Text>
                <Card.Text className="mb-2 square border-bottom">
                 Description: {this.props.description}
                </Card.Text>
            </>
        );
    }
}

export default Weather;