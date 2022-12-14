import React from 'react';
// import 'bootstrap/dit/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class Movies extends React.Component {
    render() {
        return (
          <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title className="mb-2">Local Movies</Card.Title>
                {this.props.movies.map((e, i) => {
                  return <Movies key={i} movie={e} />;
                })}
              </Card.Body>
          </Card>
        );
    };
};

export default Movies;