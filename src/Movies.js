import React from 'react';
import 'bootstrap/dit/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class Movies extends React.Component {
    render() {
        return (
            <>
            <Card.Subtitle className="mb-2">
          Title: {this.props.movie.title}
        </Card.Subtitle>
        <Card.Text className="mb-1">
          Overview: {this.props.movie.overview}
        </Card.Text>
        <Card.Text className="mb-1">
          Released: {this.props.movie.released_on}
        </Card.Text>
        <Card.Text className="mb-1">
          Popularity: {this.props.movie.popularity}
        </Card.Text>
        <Card.Text className="mb-1">
          Avg Votes: {this.props.movie.average_votes}
        </Card.Text>
        <Card.Text className="mb-1">
          Total Votes: {this.props.movie.total_votes}
        </Card.Text>
        <Card.Link href={this.props.movie.image_url} target="_blank">
          Poster Image
        </Card.Link>
        <Card.Text className="mb-3  square border-bottom"></Card.Text>
            </>
        );
    };
};

export default Movies;